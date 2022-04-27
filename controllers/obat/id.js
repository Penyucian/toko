const db = require("../../config/database");

const selectDrugs = async (req, res, next) => {

    const id = req.body.id;
    const [rows] = await db.query(`select * from obat where id = ?`, [id])

    if (rows.length != 0) {
        res.json({
            "code":200,
            "result":rows[0]
        })
    } else {
            res.json({
                "code": 200,
                "message": "Obat sudah ada"
            })
        }   
}


const drugsController = {
    selectDrugs
}

module.exports = drugsController