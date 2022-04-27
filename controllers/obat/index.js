const db = require("../../config/database");
const md5 = require(`md5`)
const JWT = require(`jsonwebtoken`)
const JWT_KEY = process.env.JWT_KEY

const getAllDrugs = async (req, res, next) => {

    const [rows] = await db.query(`select * from obat`)
    if (rows.length != 0) {
        res.json({
            "success": true,
            "code":200,
            "result": rows
        })
    } else {
        res.json({
            "code": 404,
            "message": "Obat tidak ditemukan"
        })
    }
}


const addDrugs = async (req, res, next) => {

    const name = req.body.name;
    const batch = req.body.batch;
    const ed = req.body.ed;
    const category = req.body.category;
    const stock = req.body.stock;
    const price = req.body.price;

    const [rows] = await db.query(`select * from obat where name = ?`, [name])

    if (name && category && stock && price) {
        if (rows.length == 0) {
            db.query(`insert into obat (name, batch, ed, category, stock, price) values(?,?,?,?,?,?)`,[name, batch, ed, category, stock, price])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "obat ditambahkan"
                })
            })
            .catch((err) => {
                res.json({
                    "success": false,
                    "error": err
                })
            })
        } else {
            res.json({
                "code": 200,
                "message": "Obat sudah ada"
            })
        }   
    } else {
        res.json({
            "code": 200,
            "message": "Mohon diisi nama, kategori, stok, & harga"
        })
    } 
}


const drugsController = {
    getAllDrugs,
    addDrugs,
}

module.exports = drugsController