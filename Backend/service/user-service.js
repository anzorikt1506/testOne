
const pool = require("../db.js")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenServis = require('./token-service')
//const UserDto = require('../dtos/user-dto')
     exports.registration=(login,password)=>{
      const ff = new Promise((res,rej) => {
           const hashPassword = bcrypt.hashSync(password, process.env.SOLE_PASS)
           pool.query(`SELECT * FROM roles WHERE name=? and password=?`, [login,hashPassword],
           (err, result) => {
              if (err) console.log(err);
         console.log('1');
          res(result);  
          }); 
      })
      .then((data)=>{
           
        if(Object.keys(data).length > 0){
          
        const ttt = {email: data[0].email,name:data[0].name,activationLink: true}
        const token = tokenServis.generateTokens(ttt);
        console.log(data);
        // tokenServis.saveToken(data[0].id,token.refreshToken)
        return {
          token,
          data
        }
        
        
        }else{
          return null;

         

         }  
      })
    return ff
}


         
         //const userDto = new UserDto()