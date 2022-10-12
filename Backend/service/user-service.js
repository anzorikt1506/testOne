
const pool = require("../db.js")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenServis = require('./token-service')
//const UserDto = require('../dtos/user-dto')
     exports.registration=(login,password)=>{
      const ff = new Promise((res,rej) => {
         // создаем соль
         var salt = bcrypt.genSaltSync(10);
 
// шифруем пароль
var hashPassword = bcrypt.hashSync(password, $2b$10$UNWiozInZyGZmedBTEIPGO)

           res(hashPassword)
      
      })
      .then((data)=>{
        pool.query(`SELECT * FROM roles WHERE name=? and password=?`, [login,data],
        (err, result) => {
            if (err) console.log(err);
         console.log(data);  
        });       
      })
      .then(async (data)=>{
        
        if(1 > 0){
          return `Пользователь  уже существует` // throw new Error(`Пользователь ${email} уже существует` )
        
        
        }else{
          const hashPassword = await bcrypt.hash(password, 3)
          const activationLink = uuid.v4()
         
         const ttt = {email,id_roli,activationLink: true}
         const token = tokenServis.generateTokens(ttt);
         tokenServis.saveToken(id_roli,token.refreshToken)
         return token
        }  
      })
    return ff
}


         
         //const userDto = new UserDto()