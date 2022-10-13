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
  exports.deleteRefreshTokenOLD=()=>{
          let now = new Date();
          let now1 = now.setDate(now.getDate()-30);
          let ff = new Date(now1)
          let dateOld =   `${ff.getFullYear()}-${ff.getMonth()+1}-${ff.getDate()}`
          pool.query(`DELETE FROM token WHERE DATE(data) < ?`,dateOld);

  }
  exports.saveToken=(rolesId,refreshTokenNew)=>{
        this.deleteRefreshTokenOLD();
        pool.query(`INSERT INTO token (roles,refreshToken) VALUES (?,?)`,[rolesId,refreshTokenNew]);
  }





//SELECT * FROM `tasks` WHERE data_statrt=(SELECT MIN(data_statrt) FROM tasks)
