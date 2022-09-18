
const pool = require("../db.js")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenServis = require('./token-service')
//const UserDto = require('../dtos/user-dto')
     exports.registration=(email,password,id_roli)=>{
      const ff = new Promise((res,rej) => {
        pool.query(`SELECT * FROM users WHERE email=?`, email,
        (err, result) => {
            if (err) console.log(err);
           res(result)
        });
      })
      .then(async (data)=>{
        if(Object.keys(data).length > 0){
          return `Пользователь ${email} уже существует` // throw new Error(`Пользователь ${email} уже существует` )
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