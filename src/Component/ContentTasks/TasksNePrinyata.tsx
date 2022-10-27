import { eventNames } from "process";
import React from "react";
import { buildingIn, IRoles } from "../../inteface/standartInP";

interface ObjectF {
  changePassword:(e:any)=>void
  passwordUser:string
  fioUser:string
  tasksStart:(e:any)=>void
}
const TasksNePrinyata: React.FC<ObjectF> = ({
  changePassword,
  passwordUser,
  fioUser,
  tasksStart
}) => {

  return (
    <>   
                                
                                  <div className="form-group">
                                    <input onChange={changePassword} autoComplete="off" type="text" className="form-control form-control-user"
                                        id="exampleInputPassword" value={passwordUser}  placeholder="Введите пароль сотрудника"/>
                                </div>
                                 
                                 {(fioUser == 'no') && (
                                  <div className="alert alert-danger" role="alert">
                                  Неверный пароль
                                </div>
                                 )}
                                 {(fioUser != '' && fioUser != 'no')&&(
                                    <p onClick={tasksStart} role='Примите в работу'  className="btn btn-primary btn-user btn-block">
                                      {fioUser}<br/>
                                    Примите в работу
                                     </p>
                                 )} 
                              
    </>
  );
};

export default  React.memo(TasksNePrinyata);



