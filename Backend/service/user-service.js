
const pool = require("../db.js")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenServis = require('./token-service')
//const UserDto = require('../dtos/user-dto')
     exports.registration=(login,password)=>{
      const ff = new Promise((res,rej) => {
           const hashPassword = bcrypt.hashSync(password, process.env.SOLE_PASS)
           pool.query(`SELECT * FROM roles WHERE id=? and password=?`, [login,hashPassword],
           (err, result) => {
              if (err) console.log(err);
          res(result);  
          }); 
      })
      .then((data)=>{    
        if(Object.keys(data).length > 0){ 
        const ttt = {status: data[0].status,id:data[0].id,name:data[0].name,activationLink: true}
        const token = tokenServis.generateTokens(ttt);
        tokenServis.saveToken(data[0].id,token.refreshToken)
        return {
          id:data[0].id,
          name:data[0].name,
          status:data[0].status,
          token}
        
        
        }else{return null}  
      })
    return ff
}
exports.refresh=(accessToken,refreshToken)=> {
  try {
    const dataAccess = tokenServis.validateAccessToken(accessToken);
    const dataRefresh = tokenServis.validateRefreshToken(refreshToken);
     switch(true){
      case (dataAccess === null && dataRefresh === null):
         tokenServis.deleteRefreshToken(refreshToken);
        return {message: 'Пользователь не авторизован',status:5,ss:false}
        break;
      case(dataAccess === null && dataRefresh != null):
         tokenServis.deleteRefreshToken(refreshToken);
        const ttt = {status: dataRefresh.status,id:dataRefresh.id,name:dataRefresh.name,activationLink: true}
        const token = tokenServis.generateTokens(ttt);
        tokenServis.saveToken(dataRefresh.id,token.refreshToken)
        return{
          id:dataRefresh.id,
          name:dataRefresh.name,
          status:dataRefresh.status,
          ss: true,
          token}
      break;  
      case(dataAccess != null):
      return{
        id:dataAccess.id,
        name:dataAccess.name,
        status:dataAccess.status,
        accessToken:accessToken,
        ss: false
        }     
      break;
     }
     

  } catch (e) {
      
  }
}


exports.logout=(refreshToken)=> {
  tokenServis.deleteRefreshToken(refreshToken)
}

         
         //const userDto = new UserDto()