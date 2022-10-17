import { eventNames } from "process";
import React from "react";
import { statusM } from "../../inteface/standartInP";
interface ObjectF {
  rolesStatus: string,
  statusMF: statusM[],
  statusRed:(event:any)=>void
  red_password:(event:any)=>void
}
const Statusroles: React.FC <ObjectF> = ({
  rolesStatus,
  statusMF,
  statusRed,
  red_password
  
}) => {
return(
  <>



<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {rolesStatus}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

        {statusMF.map((statusMF)=>(
    
    <li key={statusMF.id} ><a onClick={statusRed} id={`${statusMF.id}`}   className="dropdown-item" >{statusMF.text}</a></li>
    ))}
  </div>
</div>

<p className="point" onClick={red_password}>Смена пароля</p>






  
  
  </>
)
}
export default  React.memo(Statusroles)
