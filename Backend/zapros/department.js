 const pool = require("../db.js")

exports.department = ((req, res) => {
   
    const namedepartment = req.body.name
    const id_object = req.body.id_object
    const p = new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM department WHERE name=? and id_object=?`, [namedepartment,id_object],
            (err, result) => {
                if (err) console.log(err);
                resolve(result)
            });
    })
    p.then((result) => {
        if (Object.keys(result).length == 0) {
            return new Promise((resolve, reject) => {
                pool.query(
                    `INSERT INTO department (name,id_object) VALUES (?,?)`, [namedepartment,id_object],
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        resolve(true)
                    });
            })
        } else {
            const tt = [{ id: 500, name: `Есть совпадения ${namedepartment}`, bool: true }]
            res.send(tt)
        }
    })
    .then(data => {
            if (data === true) {
                pool.query(
                    `SELECT * FROM department ORDER BY id desc`,
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
            
                    });
            }
           
    })
        
        
})

exports.nachdepartment =((req, res)=>{
    pool.query(
        `SELECT * FROM department ORDER BY id desc`,
        function (err, result) {
            if (err) console.log(err);
            res.send(result)
        });
           
})
