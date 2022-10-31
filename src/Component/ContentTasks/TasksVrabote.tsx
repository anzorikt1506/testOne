import { eventNames } from "process";
import React from "react";
import { buildingIn, IRoles } from "../../inteface/standartInP";

interface ObjectF {
  fioUser:string
  tasksStart:(e:any)=>void
}
const TasksVrabote: React.FC<ObjectF> = ({
  fioUser,
  tasksStart
}) => {

  return (
    <>   
                                
                                 
                                
                                    <p onClick={tasksStart} id='Выполнил работу'  className="btn btn-warning btn-user btn-block">
                                      {fioUser}<br/>
                                     Выполнил работу
                                     </p>
                                     <p onClick={tasksStart} id='Не может выполнить работу'  className="btn btn-danger btn-user btn-block">
                                      {fioUser}<br/>
                                     Не может выполнить работу
                                     </p>
                              
    </>
  );
};

export default  React.memo(TasksVrabote);



