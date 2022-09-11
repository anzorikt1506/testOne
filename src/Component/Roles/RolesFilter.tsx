import React from 'react'
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import  {rolesSlice, roles_add_API, roles_add_API_spis, roles_del, roles_red_API } from '../../store/reducers/rolesSlice';


interface ObjectF {
 vid:number,
 id_roles:number
}
const RolesFilter: React.FC<ObjectF> = ({vid,id_roles}) => {
  const dispatch = useAppDispatch();
  const {roles} = useAppSelector((state) => state.rolesSlice);
  const {object} = useAppSelector((state) => state.objectSlice);
  const {department} = useAppSelector((state) => state.departmentSlice);
  const sort = roles.filter((roles)=>{return roles.id == id_roles})
  let result
  switch(true){
    case vid == 1:
      const object1 = object.filter((object)=>{return object.id == sort[0].id_object})
      result = object1[0].name
    break;
    case vid == 2:
      const department1 = department.filter((department)=>{return department.id == sort[0].id_department})
      result = department1[0].name  
    break;
  default:
     result = '';
  break;
  }






return(
  <>
  {result}
  </>
)
 
 

   

  

}

export default React.memo(RolesFilter) ;
