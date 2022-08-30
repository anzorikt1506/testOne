

module.exports  = (app) =>{
   const object_f = require("./zapros/object.js")
   app
    .route('/object')
    .post(object_f.object)

   app
   .route('/objectspis')
   .post(object_f.nachObject)

   const department_f = require("./zapros/department.js") 
   app
   .route('/addDepartment')
   .post(department_f.department)
   
   app
   .route('/department')
   .post(department_f.nachdepartment)

}



