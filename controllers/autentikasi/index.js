const db = require("../../config/database");
const md5 = require(`md5`)
const JWT = require(`jsonwebtoken`)
const JWT_KEY = process.env.JWT_KEY

const getUser = async (req, res, next) => {

    const auth = req.headers.authorization
    const token = auth.split(' ')[1]

    try {
        if (token) {
            try {
                const payload = await JWT.verify(token, JWT_KEY)
                if (payload) {
                    const username = payload.user_uname
                    const [rows] = await db.query(`select username from r_users where username = ?`, username)
                    res.json({
                        "success": true,
                        "data": rows[0]
                    })
                } else {
                    res.status(403)
                    const error = new Error("Wrong Token")
                    next(error)
                }
            } catch (error) {
                res.status(500)
                next(error)
            }
        }
    } catch (error) {
        next(error)
    }

}

const loginUser = async (req, res, next) => {

    const username = req.body.username

    const [rows] = await db.query(`select * from r_users where username = ?`, [username])

    if (rows.length != 0) {
        const user = rows[0]
        const password = req.body.password

        if (md5(password) == user.password) {
            const payload = {
                "user_id": user.id,
                "user_uname": user.username,
            }
            const token = await JWT.sign(payload, JWT_KEY)

            if (token) {
                res.json({
                    "code": 200,
                    "data": `Prime ${token}`
                })
            } else {
                res.json({
                    "code": 500,
                    "message": "JWT Error, cant create token"
                })
            }

        } else {
            res.json({
                "code": 403,
                "message": "Password salah"
            })
        }
    } else {
        res.json({
            "code": 403,
            "message": "Username tidak ditemukan"
        })
    }
}

const userController = {
    getUser,
    loginUser
}

module.exports = userController