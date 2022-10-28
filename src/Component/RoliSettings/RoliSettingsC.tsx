import React from 'react'
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import  {rolesSlice, roles_add_API, roles_add_API_spis, roles_del, roles_red_API, roles_red_email, roles_red_pass } from '../../store/reducers/rolesSlice';

import RoliSettings from './RoliSettings';

interface ObjectF {
  id_object:number,
  id_department:number,
}
const RoliSettingsC: React.FC<ObjectF> = ({id_object,id_department}) => {
  const dispatch = useAppDispatch();
  const {roles , error} = useAppSelector((state) => state.rolesSlice);
  const sort = roles.filter((roles)=>{return roles.id_object == id_object && roles.id_department == id_department})




  const  add_roles = () =>{
       const newroles = prompt("Введите наименование новой роли")
       switch (true) {
        case newroles == "": // if (x === 'value1')
          alert("Поле пустое")
          break;
        case newroles && newroles.length < 3: // if (x === 'value2')
          alert('Не меннее трёх символов')
          break;
        case newroles == null: // if (x === 'value2')
          break;  
        default:
          dispatch(roles_add_API(id_object,id_department,newroles))
          break; 
      }
  }

 
  const  red_roles = (event:any) =>{
      const id = event.target.id
      const name = event.target.innerHTML
       const newroles = prompt("Введите новое имя для роли ("+name+")")
       switch (true) {
        case newroles == "": // if (x === 'value1')
          alert("Поле пустое")
          break;
        case newroles && newroles.length < 3: // if (x === 'value2')
          alert('Не меннее трёх символов')
          break;
        case newroles == null: // if (x === 'value2')
          break;  
        default:
          dispatch(roles_red_API(id,newroles))
          event.target.innerHTML = newroles
          break; 
      }
  }  

  const  red_pass_roles = (event:any) =>{
    const id = event.target.slot
    const name = event.target.innerHTML
     const newroles = prompt("Введите новое имя для роли ("+name+")")
     const newroles_array = Array.from(`${newroles}`)
     const newroles_vr = newroles_array.filter((e)=>{return  e == '@' })//e.toUpperCase()
     switch (true) {
      case newroles == "": // if (x === 'value1')
        alert("Поле пустое")
        break;
      case newroles && newroles.length < 3 : // if (x === 'value2')
        alert('Не меннее трёх символов ')
        break;
      case newroles_vr.length == 0:
        alert("Неверный формат ")
        break;
      case newroles == null: // if (x === 'value2')
        break;  
      default:
        dispatch(roles_red_email(id,newroles))
        event.target.innerHTML = newroles
        break; 
    }
} 

   
  const del_roles = (event:any) => {
    const id = event.target.slot
    let new_value_object = prompt (`Вы точно хотите удалить ${event.target.role}`)
     if (new_value_object != null){
     dispatch(roles_del(id)) 
     }
   }
  
  return (
    <RoliSettings
      sort={sort}
      error={error}
      add_roles = {add_roles}
      red_roles= {red_roles}
      del_roles={del_roles}
      red_pass_roles={red_pass_roles}
    />
  );
}

export default React.memo(RoliSettingsC) ;
