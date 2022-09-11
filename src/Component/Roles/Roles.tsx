import { eventNames } from "process";
import React from "react";
import {IRoles } from "../../inteface/standartInP";
import StatusrolesC from "../Statusroles/StatusrolesC";
import UsersettingsC from "../Usersettings/UsersettingsC";
import RolesFilter from "./RolesFilter";
interface ObjectF {
  roles: IRoles[];
  error: string,

}
const Roles: React.FC<ObjectF> = ({
  roles,
  error,
}) => {


  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Роли</h6>
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
                  <th>Имя роли </th>
                  <th>Объект роли </th>
                  <th>Отдел роли</th>
                  <th>Статус роли</th>  
                  <th>Пользователи роли</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Имя роли </th>
                  <th>Объект роли </th>
                  <th>Отдел роли</th>
                  <th>Статус роли</th>  
                  <th>Пользователи роли</th>
                </tr>
              </tfoot>
              <tbody>
               
                {error && <h1>{error}</h1>}
               {
               roles.map((roles) => ( 
              <tr key={roles.id}>
              <td >{roles.name}</td>
              <td><RolesFilter vid={1} id_roles={roles.id}/></td>
              <td><RolesFilter vid={2} id_roles={roles.id}/></td>
              <td><StatusrolesC id_roles={roles.id} id_status={roles.status}/></td>
              <td><UsersettingsC 
                     id_object={roles.id_object} 
                     id_department={roles.id_department}
                     id_roli={roles.id}
                     /></td>
              
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default  React.memo(Roles);
