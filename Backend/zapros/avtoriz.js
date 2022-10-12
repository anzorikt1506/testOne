const pool = require("../db.js")
const UserServis = require('../service/user-service')

    exports.registration = (req,res,next) => {
        try{
            new Promise((res,rej) =>{
                const login = req.body.login
                const password = req.body.password
                const ff  = UserServis.registration(login,password)    
                res(ff)
            })
            .then((data)=>{
                 res.send(data)
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
