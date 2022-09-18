const pool = require("../db.js")
const UserServis = require('../service/user-service')

    exports.registration = (req,res,next) => {
        try{
            new Promise((res,rej) =>{
                const ff  = UserServis.registration('anzor190@mail.ru','anzorik123','5')    
                res(ff)
            })
            .then((data)=>{
                 res.send(data)
            })
           
        }catch(e){
            
        }
    }
    

    exports.login = (req,res,next) =>{
        try{

        }catch(e){
            
        }
    }
    
    exports.activate= (req,res,next) => {
        try{

        }catch(e){
            
        }
    }

    exports.refresh=(req,res,next)=>{
        try{

        }catch(e){
            
        }
    }
    
    exports.getUsers=(req,res,next)=>{
        try{

        }catch(e){
            
        }
    }
