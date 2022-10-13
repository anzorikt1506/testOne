import { eventNames } from "process";
import React from "react";
import { IRoles } from "../../inteface/standartInP";

interface ObjectF {
  login:string,
  password:string,
  changeLogin:(e:any)=>void,
  changePassword:(e:any)=>void,
  avtoriz:()=>void,
  roles:IRoles[]
}
const Login: React.FC<ObjectF> = ({
  login,
  password,
  changeLogin,
  changePassword,
  avtoriz,
  roles
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
                                <h1 className="h4 text-gray-900 mb-4">Авторизуйтесь</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="text"
                                      className="form-control form-control-user dropdown-toggle" 
                                      data-toggle="dropdown"  
                                      aria-haspopup="true" 
                                      aria-expanded="false"
                                      id="dropdownMenuButton"  aria-describedby="emailHelp"
                                      placeholder="Выберите логин"
                                      value={login}/>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
 
 
                {roles.map((sort) => (
                  
                    <a key={sort.id} 
                       onClick={changeLogin} 
                       id={`${sort.id}`}  
                       className="dropdown-item point" >
                             {sort.name}
                    </a>
                 
                  
          ))}
  </div>

                                </div>

                                <div className="dropdown">

</div>



                                <div className="form-group">
                                    <input onChange={changePassword} type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" value={password} placeholder="Введите пароль"/>
                                </div>

                                <p onClick={avtoriz} className="btn btn-primary btn-user btn-block">
                                    Отправить
                                </p>
                                

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

export default  React.memo(Login);



