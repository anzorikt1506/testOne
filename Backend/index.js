import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";




const PORT = 5000;
const app = express()



app.use(
    bodyParser.urlencoded({ extended: true }),
    express.json(),
    cors({ origin: ['http://localhost:3000'], })
)


const pool = mysql.createConnection({
    host: "deltaljw.beget.tech",
    user: "deltaljw_zayvka",
    database: "deltaljw_zayvka",
    password: "BK&m0EVn"
});


pool.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});






app.post('/object', (req, res) => {


    pool.connect();


    let nameObject = req.body.nameObject
    const p = new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM object WHERE name=?`, nameObject,
            (err, result) => {
                if (err) console.log(err);
                resolve(result)
            });
    })
    p.then((result) => {
        if (Object.keys(result).length == 0) {
            return new Promise((resolve, reject) => {
                pool.query(
                    `INSERT INTO object (name) VALUES (?)`, nameObject,
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        resolve(true)
                    });
            })
        } else {
            const tt = [{ id: 500, name: `Есть совпадения ${nameObject}`, bool: true }]
            res.send(tt)
        }
    })
        .then(data => {
            if (data === true) {
                pool.query(
                    `SELECT * FROM object ORDER BY id desc`,
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
                    });
            }
        })
})




app.post('/objectspis', (req, res) => {
    pool.query(
        `SELECT * FROM object ORDER BY id desc`,
        function (err, result) {
            if (err) console.log(err);
            res.send(result)
        });

})
app.listen(PORT, () => console.log(`server statsrt ${PORT}`))



