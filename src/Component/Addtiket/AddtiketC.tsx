import { eventNames } from "process";
import React from "react";
import {useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis } from "../../store/reducers/departmentSlice";
import { object_add_API_spis } from "../../store/reducers/objectSlice";
import { roles_add_API_spis, roles_avtoriz } from "../../store/reducers/rolesSlice";
import { tasks_add } from "../../store/reducers/tasksSlice";
import SpisokTasksC from "../SpisokTasks/SpisokTasksC";
import Addtiket from "./Addtiket";



// interface ObjectF {

// }
const AddtiketC: React.FC = ({

}) => {



    const dispatch = useAppDispatch()
    const {roles} = useAppSelector((state)=>state.rolesSlice)
  useEffect(() => {
    if(roles.length == 0){
      dispatch(object_add_API_spis(""));
      dispatch(department_add_API_spis(''));
      dispatch(roles_add_API_spis());
    }

  }, []);

  const buildingM = [
      {num:0,name:'Гостиница'},
      {num:1,name:'ЛОК'}
    ]
    const [buildingName, buildingFname] = useState<any>('');
    const [buildingNum, buildingFnum] = useState<any>('');
    const [login, loginF] = useState<string>('');
    const [id_roli, idF] = useState<number>(777);
    const [id_object, id_ob_F] = useState<number>(777);
    const [id_department, id_dep_F] = useState<number>(777);
    const [Floor, FloorF] = useState<any>('');
    const [opis, opisF] = useState<string>('');
    const [room, roomF] = useState<any>('');
    const clickBuilding = async(e:any) => {
      buildingFname(e.target.innerHTML)
      buildingFnum(e.target.id) 
    }
    const changeLogin = async(e:any) => {
      loginF(e.target.innerHTML)
      const vse_id = e.target.id.split(',');
      id_ob_F(vse_id[0])
      id_dep_F(vse_id[1])
      idF(vse_id[2]) 

    }
    const changeOpis = (e:any) => opisF(e.target.value)
    const changeFloor = (e:any) => FloorF(e.target.value)
    const changeRomm = (e:any) => roomF(e.target.value)
   const roles1 = roles.filter((roles)=> roles.status == 0 )
    
   const avtoriz = () => {
         switch(true){
      case id_roli==777 || id_object==77 || id_department==77:
        alert('Не выбран исполнитель')
        break;
      case buildingName == '' ||  buildingNum == '':
        alert('Не выбрано Здание')
        break;  
      case   Floor == '':
        alert('Не указан Этаж')
        break;
      case room == '':
        alert('Не указан кабинет или номер')
        break; 
      case opis == '':
        alert('Нет описания')
        break;       
      default:
       dispatch(
        tasks_add(
         id_roli,
         id_department,
         id_object,
         buildingNum,
         room,
         Floor,
         opis))
      break;  
     }
    }

return (

<>

  {id_roli < 1000 ?(
  <SpisokTasksC/>
  ) : (
<Addtiket
   opis={opis}
   changeOpis={changeOpis}
   buildingName={buildingName}
   buildingM={buildingM}
   clickBuilding={clickBuilding}
   login={login}
   Floor={Floor}
   changeLogin={changeLogin}
   changeFloor={changeFloor}
   changeRomm={changeRomm}
   avtoriz={avtoriz}
   roles={roles1}
   room={room}
   />
  )}
   
</>
  );
  
};

export default  React.memo(AddtiketC);
