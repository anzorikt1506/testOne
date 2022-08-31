import { eventNames } from "process";
import React from "react";
import { Idepartment } from "../../inteface/standartInP";
import RoliSettingsC from "../RoliSettings/RoliSettingsC";

import SpisObjectC from "../SpisObject/SpisObjectC";
import SpisObjectTabC from "../SpisObjectTab/SpisObjectTabC";
interface ObjectF {
  addObject: () => void;
  name: (event: any) => void;
  departmentName: string;
  error: string;
  isLoading: boolean;
  veryfic: string;
  show: boolean;
  verithik: string;
  booleanverithik: boolean;
  department: Idepartment[];
  red: (event: any) => void;
  del:(event: any) => void;
}
const Object: React.FC<ObjectF> = ({
  addObject,
  error,
  isLoading,
  name,
  departmentName,
  show,
  veryfic,
  verithik,
  booleanverithik,
  department,
  red,
  del
}) => {
  return (
    <>
      {isLoading && (
        <div className="okno" role="alert"> {/* alert alert-primary */}
          Идёт загрузка
        </div>
      )}


<SpisObjectC/>

      <div className="mb-3">
        <label className="form-label">Новый отдел</label>
        <input
          onChange={name}
          value={departmentName}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <br />
        {show && (
          <div className="alert alert-danger" role="alert">
            {veryfic}
          </div>
        )}
        {booleanverithik && (
          <div className="alert alert-danger" role="alert">
            {verithik}
          </div>
        )}
      </div>
      <button onClick={addObject} type="submit" className="btn btn-primary">
        Добавить
      </button>
      <br />
      <br />
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Отделы</h6>
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
                  <th>Номер отдела </th>
                  <th>Объект отдела </th>
                  <th>Наименование отдела</th>
                  <th>Роли отдела</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Номер отдела </th>
                  <th>Объект отдела </th>
                  <th>Наименование отдела</th>
                  <th>Роли отдела</th>
                </tr>
              </tfoot>
              <tbody>
               
                {error && <h1>{error}</h1>}
               { department.map((department) => ( 
         
              <tr className="point" key={department.id}>
                <td 
                    onClick={del}
                    className={`${department.id_object}`}
                    role={`Вы точно хотите удалить отдел (${department.name})`} 
                    title={`Удалить отдел (${department.name})`} 
                >{department.id}</td>
              <td><SpisObjectTabC id_object={department.id_object} id={department.id} table={2}/>
              </td>
              <td 
              onClick={red}
              className={`${department.id}`} 
              title={`Изменить имя отдела (${department.name})`}
              slot='name'
              >{department.name}</td>
              <td><RoliSettingsC id_object={department.id_object} id_department={department.id} /></td>
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

export default  React.memo(Object);
