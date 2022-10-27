import { eventNames } from "process";
import React from "react";
import { NavLink } from "react-router-dom";
import { buildingIn, IRoles } from "../../inteface/standartInP";
import TasksNePrinyata from "./TasksNePrinyata";
import TasksVrabote from "./TasksVrabote";

interface ObjectF {
  numberTasks:number
  depatmentName:string
  buildingName:string
  floor:number
  room:number
  opis:string
  statusTask:number
  changePassword:(e:any)=>void
  passwordUser:string
  fioUser:string
  tasksStart:(e:any)=>void
  status:number
  prichina:string|any
}
const ContentTasks: React.FC<ObjectF> = ({
  numberTasks,
  depatmentName,
  buildingName,
  floor,
  room,
  opis,
  statusTask,
  changePassword,
  passwordUser,
  fioUser,
  tasksStart,
  status,
  prichina
}) => {

  return (
    <>
       <div className="container">


<div className="row justify-content-center">

    <div className="col-xl-4 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
            
                <div className="row">

                    <div className="col-lg-12">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Заявка №{numberTasks}</h1>
                            </div>
                            <form className="user">
                            {(statusTask == 1)&&(
                                        <TasksVrabote
                                           fioUser={fioUser}
                                           tasksStart={tasksStart}
                                   />
                                  )}    
                                <div className="form-group">
                                    <span>Исполнитель</span>
                                    <input type="text"
                                      readOnly
                                      autoComplete="off"
                                      className="form-control form-control-user dropdown-toggle" 
                                      data-toggle="dropdown"  
                                      aria-haspopup="true" 
                                      aria-expanded="false"
                                      id="dropdownMenuButton"  aria-describedby="emailHelp"
                                      placeholder="Выберете исполнителя"
                                      value={depatmentName}/>



                                </div>

                                <div className="form-group">
                                    <span>Здание</span>
                                    <input type="text"
                                      readOnly
                                      autoComplete="off"
                                      className="form-control form-control-user dropdown-toggle" 
                                      data-toggle="dropdown"  
                                      aria-haspopup="true" 
                                      aria-expanded="false"
                                      id="dropdownMenuButton"  aria-describedby="emailHelp"
                                      placeholder="Выберете исполнителя"
                                      value={buildingName}/>

                                </div>



                                <div className="form-group">
                                  Этаж  
                                    <input readOnly autoComplete="off" type="number" className="form-control form-control-user"
                                        id="exampleInputPassword" value={floor} placeholder="Укажите этаж"/>
                                </div>

                                <div className="form-group">
                                  Номер или Кабинет 
                                    <input readOnly autoComplete="off" type="number" className="form-control form-control-user"
                                        id="exampleInputPassword" value={room} placeholder="Укажите этаж"/>
                                </div>
                                
                                <div className="form-group">
                                  Описание задачи 
                                    <textarea style={{height:'150px'}} autoComplete="off" readOnly className="form-control "
                                        id="exampleInputPassword" value={opis} placeholder="Краткое описание задачи"/>
                                </div>
                                 
                                  {(statusTask == 0)&&(
                                        <TasksNePrinyata
                                           changePassword={changePassword}
                                           passwordUser={passwordUser}
                                           fioUser={fioUser}
                                           tasksStart={tasksStart}
                                   />
                                  )}
                                  {(statusTask == 2)&&(
                                        <p className="btn btn-success btn-user btn-block">
                                          {fioUser}<br/>
                                          Выполнил заявку
                                        </p>
                                  )}
                                 {(prichina != '')&&(
                                 <div className="form-group">
                                     <strong style={{color: 'red'}}>Описание причины не выполнения задачи</strong> 
                                  <textarea style={{height:'150px', background:'rgb(146, 92, 92)',color: 'white'}} autoComplete="off" readOnly className="form-control "
                                       value={prichina} placeholder="Краткое описание задачи"/>
                                  </div>
                                   )}

                                   {(status > 0 && statusTask == 3)&&(
                                    <p onClick={tasksStart} role='Закрыть заявку' className="btn btn-success btn-user btn-block">
                                             Закрыть заявку
                                    </p>
                                   )}
                                    <NavLink to='/'  className="btn btn-secondary btn-user btn-block">
                                        Назад
                                     </NavLink>

                                 {/* {(statusTask == 0) && (
                                  <div className="form-group">
                                    <input onChange={changePassword} autoComplete="off" type="text" className="form-control form-control-user"
                                        id="exampleInputPassword" value={passwordUser}  placeholder="Введите пароль сотрудника"/>
                                </div>
                                 )}
                                 {(fioUser == 'no') && (
                                  <div className="alert alert-danger" role="alert">
                                  Неверный пароль
                                </div>
                                 )}
                                 {(fioUser != '' && fioUser != 'no')&&(
                                    <p className="btn btn-primary btn-user btn-block">
                                    В работу
                                     </p>
                                 )}  */}
                              



                                

                            </form>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </>
  );
};

export default  React.memo(ContentTasks);



