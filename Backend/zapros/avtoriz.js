const pool = require("../db.js")
const UserServis = require('../service/user-service')

    exports.registration = (req,res,next) => {
        try{
            new Promise((res,rej) =>{
                const {login,password} = req.body
               // const {refreshToken} = req.cookies
               console.log(authorizationHeader);
                const ff  = UserServis.registration(login,password)    
                res(ff)
            })
            .then((data)=>{
                if(data != null){
                    res.cookie('refreshToken ',data.token.refreshToken ,{maxAge:30*24*60*60*1000, httpOnly:true}).json(data)
                    
                }else{
                    res.status(401).json({error:'Неверный пароль'});
                }
                 
            })
           
        }catch(e){
            
        }
    }
    

    // exports.login = (req,res,next) =>{
    //     try{

    //     }catch(e){
            
    //     }
    // }
    
    // exports.activate= (req,res,next) => {
    //     try{

    //     }catch(e){
            
    //     }
    // }

    // exports.refresh=(req,res,next)=>{
    //     try{

    //     }catch(e){
            
    //     }
    // }
    
    // exports.getUsers=(req,res,next)=>{
    //     try{

    //     }catch(e){
            
    //     }
    // }
