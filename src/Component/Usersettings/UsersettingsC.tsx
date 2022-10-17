import React from 'react'
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import  {usersSlice, users_add_API, users_add_API_spis, users_del, users_password, users_red_API } from '../../store/reducers/usersSlice';

import Usersettings from './Usersettings';

interface ObjectF {
  id_object:number,
  id_department:number,
  id_roli:number
}
const UsersettingsC: React.FC<ObjectF> = ({id_object,id_department, id_roli}) => {
  const dispatch = useAppDispatch();
  const {users , error} = useAppSelector((state) => state.usersSlice);
  const sort = users.filter((users)=>{return users.id_object == id_object && users.id_departament == id_department && id_roli == users.id_roles})




  const  add_users = () =>{
       const newusers = prompt("Введите ФИО нового пользователя")
       switch (true) {
        case newusers == "": // if (x === 'value1')
          alert("Поле пустое")
          break;
        case newusers && newusers.length < 3: // if (x === 'value2')
          alert('Не меннее трёх символов')
          break;
        case newusers == null: // if (x === 'value2')
          break;  
        default:
          dispatch(users_add_API(id_object,id_department,id_roli,newusers))
          break; 
      }
  }

 
  const  red_users = (event:any) =>{
      const id = event.target.id
      const name = event.target.innerHTML
       const newusers = prompt("Введите новое ФИО для пользователя ("+name+")")
       switch (true) {
        case newusers == "": // if (x === 'value1')
          alert("Поле пустое")
          break;
        case newusers && newusers.length < 3: // if (x === 'value2')
          alert('Не меннее трёх символов')
          break;
        case newusers == null: // if (x === 'value2')
          break;  
        default:
          dispatch(users_red_API(id,newusers))
          event.target.innerHTML = newusers
          break; 
      }
  }  

  const userpassword = (event:any) =>{
    const id = event.target.slot
    const newusers = prompt("Введите пароль пользователя пользователя")
    switch (true) {
      case newusers == "": // if (x === 'value1')
        alert("Поле пустое")
        break;
      case newusers && newusers.length < 3: // if (x === 'value2')
        alert('Не меннее трёх символов')
        break;
      case newusers == null: // if (x === 'value2')
        break;  
      default:
        dispatch(users_password(id,newusers))
        break; 
    }
  }
   
  const del_users = (event:any) => {
    const id = event.target.slot
    let new_value_object = prompt (`Вы точно хотите удалить ${event.target.role}`)
     if (new_value_object != null){
     dispatch(users_del(id)) 
     }
   }
  
  return (
    <Usersettings
      sort={sort}
      error={error}
      add_users = {add_users}
      red_users= {red_users}
      del_users={del_users}
      userpassword={userpassword}
    />
  );
}

export default React.memo(UsersettingsC) ;
