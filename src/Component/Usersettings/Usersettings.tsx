import { eventNames } from "process";
import React from "react";
import {Iusers } from "../../inteface/standartInP";
interface ObjectF {
  sort: Iusers[];
  error: string,
  add_users: () => void,
  red_users:(event:any)=>void
  del_users:(event:any)=>void
}
const RoliSettings: React.FC<ObjectF> = ({
  sort,
  error,
  add_users,
  red_users,
  del_users
}) => {


  return (
    <>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Список пользователей
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a onClick={add_users}  className="dropdown-item" href="#"><strong>Добавить пользователя</strong></a> 
  {error && <h1>{error}</h1>}
                {sort.map((sort) => (
                  
                    <a key={sort.id} 
                       role={`${sort.fio}`}   
                       className="dropdown-item" 
                       href="#">
                       <span onClick={red_users} id={`${sort.id}`}   title="Редактировать пользователя">{sort.fio}</span> 
                      <span onClick={del_users} title="Удалить пользователя" slot={`${sort.id}`} className="redC" role = {`${sort.fio}`}>&nbsp;&nbsp;   &#10006;</span>
                        
                    </a>
                 
                  
          ))}
  </div>
</div>

      
    </>
  );
};

export default  React.memo(RoliSettings);
