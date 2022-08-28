 const pool = require("../db.js")

exports.object = ((req, res) => {
   
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

exports.nachObject =((req, res)=>{
    pool.query(
        `SELECT * FROM object ORDER BY id desc`,
        function (err, result) {
            if (err) console.log(err);
            res.send(result)
        });
           
})
