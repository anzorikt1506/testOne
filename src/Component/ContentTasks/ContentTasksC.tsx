
import React from "react";
import {useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis } from "../../store/reducers/departmentSlice";
import { object_add_API_spis } from "../../store/reducers/objectSlice";
import { roles_add_API_spis } from "../../store/reducers/rolesSlice";
import { tasksEndWork, tasksNoWork, tasksStartWork, tasks_update } from "../../store/reducers/tasksSlice";
import ContentTasks from "./ContentTasks";



// interface ObjectF {

// }
const ContentTasksC: React.FC = ({

}) => {
  const dispatch = useAppDispatch()

  const numberTasks = Number(document.location.pathname.split('/')[1])
  const {tasks,data_start,data_end} = useAppSelector((state)=>state.tasksSlice)
  const {roles, status,} = useAppSelector((state)=>state.rolesSlice)
  const {users} = useAppSelector((state)=>state.usersSlice)

  const tasksMas = tasks.filter((task)=> task.id == numberTasks)
  const taskIdRoles = tasksMas[0].id_roles;
  const rolesMas = roles.filter((roles) => roles.id == taskIdRoles) 
  const depatmentName =  rolesMas[0].name
  const buildingM = ['Гостиница','ЛОК'];
  const buildingName = buildingM[Number(tasksMas[0].building)] 
  const floor = Number(tasksMas[0].floor)
  const room = Number(tasksMas[0].room)
  const opis = tasksMas[0].opisanie
  const statusTask = tasksMas[0].status

  
  useEffect(() => { 
       
      if(tasksMas[0].status != 0){
        let ff =  users.filter((users)=>users.id == tasksMas[0].id_users)[0].fio
        fioUserF(ff)
      }

  }, []);


  
  const [passwordUser, passwordUserF] = useState<string>('');
  const [fioUser, fioUserF] = useState<string>('');
  const [idUser, idUserF] = useState<number>(-1);
  const changePassword = (e:any) =>{
    passwordUserF(e.target.value)
const searchUser = users.filter((user)=>user.password == e.target.value && user.id_roles == taskIdRoles)
 
 switch(true){
  case Object(searchUser).length == 1:
    fioUserF(searchUser[0].fio) 
    idUserF(searchUser[0].id) 
  break
  case Object(searchUser).length != 1:
    fioUserF('no') 
  break
 }
  }
    

 const tasksStart = (e:any) =>{
 let fff =  window.confirm(`${fioUser} Вы уверенны?`)
  switch(true){
    case e.target.id == 'Примите в работу' && fff === true:
      dispatch(tasksStartWork(numberTasks,idUser,1))
      break;
    case e.target.id == 'Выполнил работу' && fff === true:
       dispatch(tasksEndWork(numberTasks,2))
      break;  
      case e.target.id == 'Не может выполнить работу' && fff === true:
        let text:any = prompt('Кратко опшите причину');
        (text == '')&&(alert('Поле пустое'));
        (text.length < 10)&&(alert('Наберите минимум 10 символов'));
        (text.length > 9)&&(dispatch(tasksNoWork(numberTasks,text)));
       break;  
       case e.target.id == 'Закрыть заявку' && fff === true:
        dispatch(tasksEndWork(numberTasks,2))
       break;       
  }
      
 }



// alert(tasksMas[0].id_users)
  
   
    
return (
 
<>
<ContentTasks
   numberTasks={numberTasks}
   depatmentName={depatmentName}
   buildingName={buildingName}
   floor={floor}
   room={room}
   opis={opis}
   statusTask={statusTask}
   changePassword={changePassword}
   passwordUser={passwordUser}
   fioUser={fioUser}
   tasksStart={tasksStart}
   status={status}
   prichina={tasksMas[0].prichina}
   />
</>
  );
  
};

export default  React.memo(ContentTasksC);
