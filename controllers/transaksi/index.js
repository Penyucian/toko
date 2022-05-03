const db = require("../../config/database");
const md5 = require(`md5`)
const JWT = require(`jsonwebtoken`)
const JWT_KEY = process.env.JWT_KEY

const insertTransaction = async (req, res, next) => {
    
    const json = JSON.stringify(req.body.json);
    const total = req.body.total;

    if (json && total) {
        db.query(`insert into t_drugs (array_transaction,total) values(json_array(?),?)`,[json, total])
        .then(() => {
            res.json({
                "success": true,
                "message": "transaksi ditambahkan"
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
            "message": "cek ulang data"
        })
    }
}

const updateDrugs = async (req, res, next) => {

    const id = req.body.id;
    const stock = req.body.stock;
    
    const [rows] = await db.query(`select * from obat where id = ?`, [id])

    if (stock) {
        if (rows.length != 0) {
            db.query(`update obat set stock = ? where id = ?`,[stock,id])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Stok terupdate"
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
                "message": "Stok tidak terupdate"
            })
        }   
    } else {
        res.json({
            "code": 200,
            "message": "Cek data stok yang dibeli"
        })
    } 
}


const drugsController = {
    insertTransaction,
    updateDrugs
}

module.exports = drugsController