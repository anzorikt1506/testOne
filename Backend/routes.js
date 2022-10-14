

module.exports  = (app) =>{
   const object_f = require("./zapros/object.js")
   app
    .route('/object')
    .post(object_f.object)

   app
   .route('/objectspis')
   .post(object_f.nachObject)

   app
   .route('/objectupdate')
   .post(object_f.updateObject)

   app
   .route('/objectdel')
   .post(object_f.delObject)

   app
   .route('/objectUpdateTable')
   .post(object_f.updateObjectTabel)

   const department_f = require("./zapros/department.js") 

   app
   .route('/addDepartment')
   .post(department_f.department)

   
   app
   .route('/department')
   .post(department_f.nachdepartment)

   app
   .route('/departmentRedName')
   .post(department_f.updateNameDepartment)

   app
   .route('/departmentdel')
   .post(department_f.delDepartment)
      
   const avtoriz_f = require("./zapros/avtoriz") 

   app
   .route('/rolesavtoriz')
   .post(avtoriz_f.registration) 

   app
   .route('/refresh')
   .get(avtoriz_f.refresh) 

   const roles_f = require("./zapros/roles.js") 

   app
   .route('/rolesoption')
   .post(roles_f.rolesoption)

   app
   .route('/rolesSpis')
   .get(roles_f.rolesSpis)

   app
   .route('/addroles')
   .post(roles_f.addroles)
   
   app
   .route('/redroles')
   .post(roles_f.redroles)

   app
   .route('/rolesdel')
   .post(roles_f.rolesdel)  

   app
   .route('/redrolespassword')
   .post(roles_f.redrolespassword)  

const users_f = require("./zapros/users.js") 

   app
   .route('/usersSpis')
   .get(users_f.usersSpis)

   app
   .route('/addusers')
   .post(users_f.addusers)
   
   app
   .route('/redusers')
   .post(users_f.redusers)

   app
   .route('/usersdel')
   .post(users_f.usersdel)  

const avtoriz = require("./zapros/avtoriz.js") 
   app
   .route('/test1')
   .get(avtoriz.registration) 

}

