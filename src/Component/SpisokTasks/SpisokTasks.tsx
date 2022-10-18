import { eventNames } from "process";
import React from "react";
import {IObject, Itasks } from "../../inteface/standartInP";
interface ObjectF {
  name: (event: any) => void;
  objectName: string;
  error: string;
  isLoading: boolean;
  tasks: Itasks[];
  veryfic: string;
  show: boolean;
  verithik: string;
  booleanverithik: boolean;
  red_object: (event: any) => void;
  del_object: (event: any) => void;
  nameObject:(tip:number,id:any,id1?:any)=>any
}
const SpisokTasks: React.FC<ObjectF> = ({
  error,
  isLoading,
  name,
  tasks,
  objectName,
  show,
  veryfic,
  verithik,
  booleanverithik,
  red_object,
  del_object,
  nameObject
}) => {

  return (
    <>
      {isLoading && (
        <div className="okno" role="alert"> {/* alert alert-primary */}
          Идёт загрузка
        </div>
      )}
      <button type="submit" className="btn btn-primary">
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
                  <th>Причина</th>
                </tr>
              </tfoot>
              <tbody>
                {error && <h1>{error}</h1>}
                {tasks.map((tasks) => (
                  <tr style={{backgroundColor: `${nameObject(5,tasks.status)[1]}`, color: `${nameObject(5,tasks.status)[2]}`}} className="point" key={tasks.id}  >
                    <td >{tasks.id}</td>
                    <td >{nameObject(4,tasks.building)} (этаж {tasks.floor} номер {tasks.room})</td>
                    <td >{nameObject(2,tasks.id_roles)}</td>
                    <td >{nameObject(3,tasks.id_users)}</td>
                    <td >{tasks.opisanie}</td>
                    <td >{nameObject(5,tasks.status)[0]}</td>
                    <td >{tasks.prichina}</td>
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

export default  React.memo(SpisokTasks);
