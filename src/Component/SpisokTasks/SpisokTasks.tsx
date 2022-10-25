import { eventNames } from "process";
import React from "react";
import {Idepartment, IObject, IRoles, Itasks, Iusers, str_numIn } from "../../inteface/standartInP";
import BuildingSortTasks from "./BuildingSortTasks";
import DepartmentSortTasks from "./DepartmentSortTasks";
import RolesSortTasks from "./RolesSortTasks";
import StatusSortTasks from "./StatusSortTasks";
import UsersSortTasks from "./UsersSortTasks";
interface ObjectF {
  tasks: Itasks[];
  department:Idepartment[];
  roles:IRoles[];
  users:Iusers[];
  valid_spis:(tip:number,id:any,id_w:any)=>any
  update_tasks:()=>void
  str_click:any,
  data_start:string,
  data_end:string,
  date_v_old:(e:any)=>void,
  date_v_start:(e:any)=>void,
  select_str: (e:any)=>void,
  select_str1: ()=>void,
  select_str2: ()=>void,
  sortF: (e:any)=>void,
  nameStatus:string,
  namebuilding:string,
  namedepartment:string,
  nameroles:string,
  nameusers:string
}
const SpisokTasks: React.FC<ObjectF> = ({
  tasks,
  valid_spis,
  update_tasks,
  str_click,
  data_start,
  data_end,
  date_v_old,
  date_v_start,
  select_str,
  select_str1,
  select_str2,
  sortF,
  nameStatus,
  namebuilding,
  namedepartment,
  department,
  roles,
  nameroles,
  nameusers,
  users
}) => {

  return (
    <>


<div style={{float:'left'}}>
<input onChange={date_v_old}  className="btn  btn-info" type='date' value={data_end} />
</div>

<div style={{float:'left'}}>
<i className="fa fa-arrow-right" aria-hidden="true" >  </i>
<input onChange={date_v_start}  className="btn  btn-secondary" type='date' value={data_start}/>
</div>

  <StatusSortTasks 
    sortF={sortF} 
    nameStatus={nameStatus}/>
    
  <BuildingSortTasks 
     sortF={sortF}
     namebuilding={namebuilding}/>
 
 <DepartmentSortTasks 
     sortF={sortF}
     namedepartment={namedepartment}
     department={department}
     />
 <RolesSortTasks 
     sortF={sortF}
     nameroles={nameroles}
     roles={roles}
     />
 <UsersSortTasks 
     sortF={sortF}
     nameusers={nameusers}
     users={users}
     />

  <i className="fa fa-arrow-right" aria-hidden="true">  </i>
  <button onClick={update_tasks} type="submit" className="btn btn-primary">
        Добавить заявку
      </button>


      <br />
      <br />
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Объекты</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Номер заявки </th>
                  <th>Здание</th>
                  <th>Должность</th>
                  <th>ФИО Исполнителя</th>
                  <th>Описание</th>
                  <th>Статус</th>
                  <th>Время</th>
                  <th>Причина</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Номер заявки </th>
                  <th>Здание</th>
                  <th>Должность</th>
                  <th>ФИО Исполнителя</th>
                  <th>Описание</th>
                  <th>Статус</th>
                  <th>Время</th>
                  <th>Причина</th>
                </tr>
              </tfoot>
              <tbody>

                {tasks.map((tasks) => (
                  <tr key={tasks.id} style={{backgroundColor: `${valid_spis(5,tasks.status,tasks.id)[1]}`, color: `${valid_spis(5,tasks.status,tasks.id)[2]}`}} className="point"   >
                    <td >{tasks.id}</td>
                    <td >{valid_spis(4,tasks.building,tasks.id)} (этаж {tasks.floor} номер {tasks.room})</td>
                    <td >{valid_spis(2,tasks.id_roles,tasks.id)}</td>
                    <td >{valid_spis(3,tasks.id_users,tasks.id)}</td>
                    <td >{tasks.opisanie}</td>
                    <td >{valid_spis(5,tasks.status,tasks.id)[0]}</td>
                    <td >{valid_spis(5,tasks.status,tasks.id)[3]}</td>
                    <td >{tasks.prichina}</td> 
                  </tr>   
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>



      <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li
    style={{cursor:'pointer'}}
    onClick={select_str2} 
    className="page-item">
      <a className="page-link"  aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
      
    {str_click.map((str:any)=>(
      <>
      <li onClick={select_str} 
          role={str.str}
          style={{cursor:'pointer'}} 
          key={str.key} 
          className={`page-item ${str.activ}`}><a className="page-link" >{str.str}</a></li>
    </>
    ))}
     
    <li 
    style={{cursor:'pointer'}}
    onClick={select_str1}  
    className="page-item">
      <a className="page-link"  aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>

    </>
  );
};

export default  React.memo(SpisokTasks);
