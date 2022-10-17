const pool = require("../db.js")
const UserServis = require('../service/user-service')

    exports.tasks_add = (req,res,next) => {
        try{
            new Promise((res,rej) =>{
                const {id_roles,id_object,id_department,floor,building,room,opisanie} = req.body
                pool.query(
                    `INSERT INTO tasks (id_roles,id_object,id_department,floor,building,room,opisanie) VALUES (?,?,?,?,?,?,?)`, 
                    [id_roles,id_object,id_department,floor,building,room,opisanie],
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        res('true')
                    });
            })
            .then((data)=>{
                pool.query(
                    `SELECT * FROM tasks  ORDER BY id desc`,
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
                    });
                 
            })
           
        }catch(e){
            res.json({error:e});
        }
    }
    

    