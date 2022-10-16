import { eventNames } from "process";
import React from "react";
import { IObject } from "../../inteface/standartInP";
interface ObjectF {
  addObject: () => void;
  name: (event: any) => void;
  objectName: string;
  error: string;
  isLoading: boolean;
  object: IObject[];
  veryfic: string;
  show: boolean;
  verithik: string;
  booleanverithik: boolean;
  red_object: (event: any) => void;
  del_object: (event: any) => void;
}
const Object: React.FC<ObjectF> = ({
  addObject,
  error,
  isLoading,
  name,
  object,
  objectName,
  show,
  veryfic,
  verithik,
  booleanverithik,
  red_object,
  del_object
}) => {

  return (
    <>
      {isLoading && (
        <div className="okno" role="alert"> {/* alert alert-primary */}
          Идёт загрузка
        </div>
      )}
      <div className="mb-3">
        <label className="form-label">Новый объект</label>
        <input
          onChange={name}
          value={objectName}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          autoComplete="off"
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
                  <th>Номер объекта </th>
                  <th>Наименование объекта</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Номер объекта </th>
                  <th>Наименование объекта</th>
                </tr>
              </tfoot>
              <tbody>
                {error && <h1>{error}</h1>}
                {object.map((object) => (
                  <tr className="point" key={object.id}  >
                    <td  
                    onClick={del_object}
                    className = {`${object.id}`} 
                    role={`Вы точно хотите удалить объект (${object.name})`} 
                    title={`Удалить объект (${object.name})`}  >
                      {object.id}</td>
                    <td onClick={red_object} 
                        className = {`${object.id}`} 
                        slot="name" title={`Изменить имя объекта (${object.name})`} 
                        role={`новое название для ${object.name}`} >
                          {object.name}
                     </td>
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
