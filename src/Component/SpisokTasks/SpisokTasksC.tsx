import React from 'react'
import { useEffect, useState } from "react";
import { str_navig_map, time_midl, time_old, useAppDispatch, useAppSelector } from "../../hook/redux";
import { IObject, str_numIn } from '../../inteface/standartInP';
import {
  objectSlice,
  object_add_API,
  object_add_API_spis,
  object_del_name,
  object_udate_name,
} from "../../store/reducers/objectSlice";
import { tasksSlice, tasks_update } from '../../store/reducers/tasksSlice';
import { users_add_API_spis } from '../../store/reducers/usersSlice';
import SpisokTasks from './SpisokTasks';

const SpisokTasksC = () => {
  const dispatch = useAppDispatch();
  const {data_start, data_end, element_str, selected_str } = useAppSelector((state) => state.tasksSlice);
  let {tasks} = useAppSelector((state) => state.tasksSlice);
    const { department } = useAppSelector((state) => state.departmentSlice);
    const { roles } = useAppSelector((state) => state.rolesSlice);
    const { users } = useAppSelector((state) => state.usersSlice);
    const end_element_str = (Number(selected_str)-1)*element_str
    const start_element_str = Number(selected_str)*element_str
  
    const rolesSort = roles.filter((rol) => rol.status == 0)
    const usersSort = users.filter((user) => user.status == 0)

   
   const [nameStatus, fnameStatus] = useState<string>('Статус заявки');
   const [idStatus, fidStatus] = useState<number>(-1);
   const [namebuilding, fnamebuilding] = useState<string>('Здание');
   const [idbuilding, fidbuilding] = useState<number>(-1);
   const [namedepartment, fnamedepartment] = useState<string>('Отдел');
   const [iddepartment, fiddepartment] = useState<number>(-1);
   const [nameroles, fnameroles] = useState<string>('Должность');
   const [idroles, fidroles] = useState<number>(-1);
   const [nameusers, fnameusers] = useState<string>('Исполнитель');
   const [idusers, fidusers] = useState<number>(-1);


   const sortVF = (role:string,text:string,vse:string,idF:any,nameF:any) =>{
    
    let idd = Number(role) 
    idd == -1 ? nameF(vse): nameF(text)
    idF(idd)
    
   }


  const sortF = (e:any) =>{     
    switch(true){
      case e.target.name == 'status':
        sortVF(
          e.target.id,
          e.target.innerText,
          'Статус заявки',
          fidStatus,
          fnameStatus)
      break;
      case e.target.name == 'building':
        sortVF(
          e.target.id,
          e.target.innerText,
          'Здание',
          fidbuilding,
          fnamebuilding)
      break;
      case e.target.name == 'depatment':
        sortVF(
          e.target.id,
          e.target.innerText,
          'Отдел',
          fiddepartment,
          fnamedepartment)
      break;
      case e.target.name == 'roles':
        sortVF(
          e.target.id,
          e.target.innerText,
          'Должность',
          fidroles,
          fnameroles)
      break;
      case e.target.name == 'users':
        sortVF(
          e.target.id,
          e.target.innerText,
          'Исполнитель',
          fidusers,
          fnameusers)
      break;      
    }
  }



  const tasks0 = tasks.filter((task)=> idStatus > -1 ? task.status == idStatus : task.id > 0)
                .filter((task)=> idbuilding > -1 ? task.building == idbuilding: task.id > 0 )
                .filter((task)=> iddepartment > -1 ? task.id_department == iddepartment: task.id > 0 )
                .filter((task)=> idroles > -1 ? task.id_roles == idroles: task.id > 0 )
                .filter((task)=> idusers > -1 ? task.id_users == idusers: task.id > 0 )

  const tasks1 =  tasks0.filter((task)=>  tasks0.indexOf(task) < start_element_str && tasks.indexOf(task) >= end_element_str)
  const tasks_s_0 =  tasks0.filter((tasks)=>tasks.status == 0)
  const tasks_s_1 =  tasks0.filter((tasks)=>tasks.status == 1)  
  const tasks_s_2 =  tasks0.filter((tasks)=>tasks.status == 2)  
  const tasks_s_3 =  tasks0.filter((tasks)=>tasks.status == 3) 
  const m_length_tasks =[tasks0.length,tasks_s_0.length,tasks_s_1.length,tasks_s_2.length,tasks_s_3.length]

  

    const valid_spis = (tip:number,id:any,id_w:any) => {       
      switch(true){
       case(tip==1):
        const f = department.filter((object)=> object.id == id)
        if(f.length > 0) return f[0].name
       break;
       case(tip==2):
        const f1 = roles.filter((object)=> object.id == id)
        if(f1.length > 0) return f1[0].name
       break;
       case(tip==3 && id > 0 ):
        const f2 = users.filter((object)=> object.id == id)
       if(f2.length > 0) return f2[0].fio
       break;
       case(tip == 4 && id == 0  ):
        return 'Гостиница'
       break;
       case(tip == 4 && id == 1  ): 
        return 'ЛОК'
       break;
       case(tip == 5 && id == 0  ):
       const d_e_tasks = tasks.filter((tasks)=>tasks.id == id_w)
       let time_expect = time_old(d_e_tasks[0].data_statrt) 
       const ff = ['Ждёт выполнения','#d6d8d9','#383241',time_expect] 
        return ff
       break;
      case(tip == 5 && id == 1  ):
      const d_w_tasks = tasks.filter((tasks)=>tasks.id == id_w)
      let time_work = time_old(d_w_tasks[0].data_v_rabote)
      const ff1 = ['Выполняется','#de9c00','#856404',time_work]
      return ff1
      break;
      case(tip == 5 && id == 2  ):
      const d_y_tasks = tasks.filter((tasks)=>tasks.id == id_w)
      let time_yes = time_midl(d_y_tasks[0].data_end,d_y_tasks[0].data_statrt)
      const ff2 = ['Выполнена','#38bb60','#155724',time_yes]
      return ff2
      case(tip == 5 && id == 3  ):
      const d_no_tasks = tasks.filter((tasks)=>tasks.id == id_w) 
      let time_no = time_old(d_no_tasks[0].data_end)
      const ff3 = ['Не выполнена','#ff4848','black',time_no] 
      return ff3
       default:
        return ''
        break;
      }
    }
    
    const update_tasks = () => {
     dispatch(tasks_update(data_start,data_end)) 
    }


  useEffect(() => {
    if(tasks.length == 0){
     dispatch(object_add_API_spis("")); 
     dispatch(users_add_API_spis());
     dispatch(tasks_update(data_start,data_end));
    }
  
    
  }, []);


  // setInterval(() => {
  //   if(show1 < 10){fshow1(show1+1)}else{fshow1(0)}  
    
  //  }, 30000);

   
    const str_click = str_navig_map(tasks0.length,element_str,selected_str)
    
  const select_str =  (e:any) =>{
    dispatch(tasksSlice.actions.selected_str_tasks(e.target.innerText))
  }
 
  const select_str1 =  () =>{
    if((Number(selected_str) + 1) <= Math.ceil(tasks.length/element_str)){
      dispatch(tasksSlice.actions.selected_str_tasks(Number(selected_str) + 1))
    }
    
  } 
  const select_str2 =  () =>{
    if((Number(selected_str) - 1) > 0){
      dispatch(tasksSlice.actions.selected_str_tasks(Number(selected_str) - 1))
    }
    
  } 
   const date_v_old =  (e:any)=>{
    dispatch(tasksSlice.actions.data_old_tasks(e.target.value))
    dispatch(tasks_update(data_start,e.target.value)) 
   
   }
   const date_v_start = async (e:any)=>{
    dispatch(tasksSlice.actions.data_start_tasks(e.target.value))
    dispatch(tasks_update(e.target.value,data_end)) 
   
   }



  return (
    <SpisokTasks
      tasks={tasks1}
      valid_spis={valid_spis}
      update_tasks={update_tasks}
      str_click={str_click}
      data_start={data_start}
      data_end={data_end}
      date_v_old={date_v_old}
      date_v_start={date_v_start}
      select_str={select_str}
      select_str1={select_str1}
      select_str2={select_str2}
      sortF={sortF}
      nameStatus={nameStatus}
      namebuilding={namebuilding}
      department={department}
      namedepartment={namedepartment}
      roles={rolesSort}
      nameroles={nameroles}
      users={usersSort}
      nameusers={nameusers}
      m_length_tasks={m_length_tasks}
    />
  );
}

export default React.memo(SpisokTasksC) ;
