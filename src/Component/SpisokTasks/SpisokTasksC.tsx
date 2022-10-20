import React from 'react'
import { useEffect, useState } from "react";
import { time_midl, time_old, useAppDispatch, useAppSelector } from "../../hook/redux";
import { IObject } from '../../inteface/standartInP';
import {
  objectSlice,
  object_add_API,
  object_add_API_spis,
  object_del_name,
  object_udate_name,
} from "../../store/reducers/objectSlice";
import { users_add_API_spis } from '../../store/reducers/usersSlice';
import SpisokTasks from './SpisokTasks';

const SpisokTasksC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, tasks, verithik, booleanverithik } = useAppSelector((state) => state.tasksSlice);
    const { department } = useAppSelector((state) => state.departmentSlice);
    const { roles } = useAppSelector((state) => state.rolesSlice);
    const { users } = useAppSelector((state) => state.usersSlice);


    const nameObject = (tip:number,id:any,id_w:any) => {       
      switch(true){
       case(tip==1):
        const f = department.filter((object)=> object.id == id)
        return f[0].name
       break;
       case(tip==2):
        const f1 = roles.filter((object)=> object.id == id)
        return f1[0].name
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
    
    const [show1, fshow1] = useState<number>(0);
  useEffect(() => {
    if(tasks.length == 0){
     dispatch(object_add_API_spis("")); 
    }
  





    dispatch(users_add_API_spis());
  }, []);
  setInterval(() => {
    if(show1 < 10){fshow1(show1+1)}else{fshow1(0)}  
   }, 1000);
  const [show, fshow] = useState<boolean>(false);
  const [veryfic, veryficf] = useState<string>("");
  const [objectName, fmodals] = useState<string>("");
  
  const name = (event: any) => {
    fmodals(event.target.value);
  };

  const red_object = (event:any) => {
    
   const slot = event.target.slot
   const id = event.target.className
   let new_value_object = prompt (`Введите ${event.target.role}`)
   switch (true) {
    case new_value_object == "": 
      veryficf("Поле пустое");
      fshow(true);
      dispatch(objectSlice.actions.falseVerithik(false));
      break;
    case new_value_object && new_value_object.length < 3 && slot == 'name': 
      veryficf("Не меннее трёх символов");
      fshow(true);
      dispatch(objectSlice.actions.falseVerithik(false));
      break;  
    case new_value_object === null: 
      break;    
    default:
      dispatch(object_udate_name(`${new_value_object}`,id));
      fmodals("");
      veryficf("Поле пустое");
      fshow(false);
      dispatch(objectSlice.actions.selectObject(0))
      dispatch(objectSlice.actions.falseVerithik(false));
  }
  }

  const del_object = (event:any) => {
    const slot = event.target.slot
    const id = event.target.className
    let new_value_object = prompt (`${event.target.role}`)
     if (new_value_object != null){
     dispatch(object_del_name(id)) 
     dispatch(objectSlice.actions.selectObject(0))
     }
   }

  const addObject = () => {
    switch (true) {
      case objectName == "": // if (x === 'value1')
        veryficf("Поле пустое");
        fshow(true);
        dispatch(objectSlice.actions.falseVerithik(false));
        break;
      case objectName.length < 3: // if (x === 'value2')
        veryficf("Не меннее трёх символов");
        fshow(true);
        dispatch(objectSlice.actions.falseVerithik(false));
        break;
      default:
        dispatch(object_add_API(`${objectName}`));
        fmodals("");
        veryficf("Поле пустое");
        fshow(false);
        dispatch(objectSlice.actions.falseVerithik(false));
        dispatch(objectSlice.actions.selectObject(0))
    }
  };

  return (
    <SpisokTasks
      name={name}
      error={error}
      show={show}
      veryfic={veryfic}
      booleanverithik={booleanverithik}
      isLoading={isLoading}
      objectName={objectName}
      tasks={tasks}
      verithik={verithik}
      red_object={red_object}
      del_object={del_object}
      nameObject={nameObject}
    />
  );
}

export default React.memo(SpisokTasksC) ;
