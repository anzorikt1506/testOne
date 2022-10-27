import React from 'react'
import { NavLink } from 'react-router-dom';
import { Itasks } from '../../inteface/standartInP';
interface TasksF {
    tasksR: Itasks[];
    name: string,
    taskClassStatus:any
  }
const Colorsystem: React.FC<TasksF> =({
    tasksR,
    name,
    taskClassStatus
   })=> {
    return ( 
        <>
        
      {tasksR.map((tasksR) =>(
                <NavLink to={`/${tasksR.id}`} className="col-lg-6 mb-4">
            <div  className={`card ${taskClassStatus(0,tasksR.status)} text-white shadow`}>
                <div className="card-body">
                    
                   {tasksR.opisanie}
                    <div style={{color:'black'}} className="text-white-50 small">{taskClassStatus(1,tasksR.building)}(этаж{tasksR.floor})(комната{tasksR.room})(заявка{tasksR.id})</div>
                    <div style={{color:'black'}} className="text-white-50 small">{tasksR.status == 0 ? tasksR.data_statrt : tasksR.data_v_rabote }</div>
                </div>
            </div>
        </NavLink>
      ))}

 


 


   
    </>
     );
}

export default React.memo(Colorsystem);