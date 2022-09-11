import { eventNames } from "process";
import React from "react";
import {IRoles } from "../../inteface/standartInP";
interface ObjectF {
  sort: IRoles[];
  error: string,
  add_roles: () => void,
  red_roles:(event:any)=>void
  del_roles:(event:any)=>void
}
const RoliSettings: React.FC<ObjectF> = ({
  sort,
  error,
  add_roles,
  red_roles,
  del_roles
}) => {


  return (
    <>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Список ролей
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a onClick={add_roles}  className="dropdown-item" href="#"><strong>Добавить роль</strong></a> 
  {error && <h1>{error}</h1>}
                {sort.map((sort) => (
                  
                    <a key={sort.id} 
                       role={`${sort.name}`}   
                       className="dropdown-item" 
                       href="#">
                       <span onClick={red_roles} id={`${sort.id}`}   title="Редактировать роль">{sort.name}</span> 
                       <span onClick={del_roles} 
                            title="Удалить роль" 
                            slot={`${sort.id}`} 
                            className="redC" 
                            role = {`${sort.name}`}>&nbsp;&nbsp;   &#10006; </span>
                        <span
                              title="Электронная почта" 
                              slot={`${sort.id}`} 
                             >&#64;</span>
                    </a>
                 
                  
          ))}
  </div>
</div>

      
    </>
  );
};

export default  React.memo(RoliSettings);
