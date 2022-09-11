 const pool = require("../db.js")


 exports.rolesSpis =((req, res)=>{
    pool.query(
        `SELECT * FROM roles ORDER BY id desc`,
        function (err, result) {
            if (err) console.log(err);
            res.send(result)
        });
           
})




exports.addroles = ((req, res) => {
   
    const name = req.body.name
    const id_object = req.body.id_object
    const id_department = req.body.id_department
    const p = new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM roles WHERE name=? and id_object=? and id_department=?`, [name,id_object,id_department],
            (err, result) => {
                if (err) console.log(err);
                resolve(result)
            });
    })
    p.then((result) => {
        if (Object.keys(result).length == 0) {
            return new Promise((resolve, reject) => {
                pool.query(
                    `INSERT INTO roles (name,id_object,id_department) VALUES (?,?,?)`, [name,id_object,id_department],
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        resolve(true)
                    });
            })
        } else {
            const tt = [{ id: 5000000000000000000, name: `Есть совпадения ${name}`, bool: true }]
            res.send(tt)
        }
    })
    .then(data => {
            if (data === true) {
                pool.query(
                    `SELECT * FROM roles  ORDER BY id desc`,
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
            
                    });
            }
           
    })
        
        
})



exports.redroles = ((req, res)=>{
    const name = req.body.name
    const id = req.body.id
        pool.query(
        `UPDATE roles SET name = ? WHERE id = ?`,[name,id],
        function (err, result) {
            if (err) console.log(err);   
            
        });           
})

exports.rolesdel = ((req, res)=>{
    const id = req.body.id
    const p = new Promise((resolve, reject) => {
        
        pool.query(
            `DELETE from roles WHERE id = ?`,id,
            function (err, result) {
                if (err) console.log(err);   
                resolve(result)
            });

    })
    p.then((data)=>{
         pool.query(
            `SELECT * FROM roles ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
            });  
    })
     
 
           
})

exports.rolesoption = ((req, res)=>{
    const id_roles = req.body.id_roles
    const option = req.body.option
    const p = new Promise((resolve, reject) => {
        
        pool.query(
            `UPDATE roles SET status = ? WHERE id = ?`,[option,id_roles],
            function (err, result) {
                if (err) console.log(err);   
                resolve(result)
            }); 

    })
    p.then((data)=>{
         pool.query(
            `SELECT * FROM roles ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
            });  
    })
     
 
           
})