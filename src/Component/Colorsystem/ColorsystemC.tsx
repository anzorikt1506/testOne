import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { object_add_API_spis } from '../../store/reducers/objectSlice';
import { tasks_update } from '../../store/reducers/tasksSlice';
import { users_add_API_spis } from '../../store/reducers/usersSlice';
import Colorsystem from './Colorsystem';
const ColorsystemC: React.FC =()=> {
    const dispatch = useAppDispatch();

    const {status,name,id} = useAppSelector((state) => state.rolesSlice);
    const {tasks,data_start,data_end} = useAppSelector((state) => state.tasksSlice);
    const [tasksSortStatus, ftasksSortStatus] = useState<number>(-1);
     
    useEffect(() => {
        if(tasks.length == 0){
         dispatch(tasks_update(data_start,data_end)) 
        }
    }, []);

    const taskClassStatus = (tip:number,status:number) => {
       switch(true){
        case tip==0 && status == 0:
            return 'bg-secondary'
        break;
        case tip==0 && status == 1:
            return 'bg-primary'
        break;
        case tip==1 && status == 0:
            return 'Гостиница'
        break;
        case tip==1 && status == 1:
            return 'ЛОК'
        break;
       }
    }


    const tasksR = tasks.filter(tasksSortStatus == 1 ?
                                  (tas)=>tas.id_roles == id &&
                                           tas.status == 0 : 
                                  (tas)=>tas.id_roles == id &&
                                           tas.status == 0 || tas.status == 1)
                        .filter(tasksSortStatus == 0 ? 
                            (tas)=>tas.id_roles == id &&
                                     tas.status == 0: 
                            (tas)=>tas.id_roles == id &&
                                     tas.status == 0 || tas.status == 1)
                                     debugger
    return ( 
        <>
        <Colorsystem
          tasksR={tasksR}
          name={name}
          taskClassStatus={taskClassStatus}
        />
        </>
     );
}

export default React.memo(ColorsystemC);