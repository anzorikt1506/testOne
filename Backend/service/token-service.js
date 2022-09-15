const pool = require("../db.js")
const jwt = require('jsonwebtoken')

  exports.generateTokens= (payload)=>{
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn:'30m'})
      const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn:'30d'})
      return{
        accessToken,
        refreshToken
      }
  }
  exports.saveToken=(userId,refreshToken)=>{
    const prom = new Promise((resolve,reject)=>{
        pool.query(
            `SELECT * FROM token where user = ? order by id asc`,userId,
            function (err, result) {
                if (err) console.log(err);
                resolve(result)
            });
    })
    .then((data)=>{
         if(Object.keys(data).length > 10){
            pool.query(`UPDATE token SET refreshToken = ? WHERE id = ?`,[refreshToken,data[0].id]);
        }else{
            pool.query(
                `INSERT INTO token (user,refreshToken) VALUES (?,?)`, [userId,refreshToken],
                function (err, result) {
                    if (err) console.log(err);
                    else console.log(result);
                    
                });
        }
    })
  }





//SELECT * FROM `tasks` WHERE data_statrt=(SELECT MIN(data_statrt) FROM tasks)