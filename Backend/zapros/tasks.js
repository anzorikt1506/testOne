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
    

    exports.tasks_update_z = (req,res,next) => {
        try{
            const {data_start,data_end} = req.body
            var D_start = new Date(data_start);
            D_start.setDate(D_start.getDate() + 1);
            var D_end = new Date(data_end);
            D_end.setDate(D_end.getDate() - 1);
                pool.query(
                    `SELECT * FROM tasks WHERE data_statrt BETWEEN  ? AND  ? ORDER BY id desc`,
                    [data_end,D_start],
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
                    });           
        }catch(e){
            res.json({error:`что то не так ${D_start} c ${D_end}`});
        }
    }