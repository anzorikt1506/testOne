import { eventNames } from "process";
import React from "react";
import {useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis } from "../../store/reducers/departmentSlice";
import { object_add_API_spis } from "../../store/reducers/objectSlice";
import { roles_add_API_spis, roles_avtoriz } from "../../store/reducers/rolesSlice";
import Addtiket from "./Addtiket";



// interface ObjectF {

// }
const AddtiketC: React.FC = ({

}) => {



    const dispatch = useAppDispatch()
    const {roles} = useAppSelector((state)=>state.rolesSlice)
  useEffect(() => {
    if(roles.length == 0){
      dispatch(object_add_API_spis(""));
      dispatch(department_add_API_spis(''));
      dispatch(roles_add_API_spis());
    }

  }, []);

   const buildingM = [
      {num:0,name:'Гостиница'},
      {num:1,name:'ЛОК'}
    ]
    const [buildingName, buildingFname] = useState<any>('');
    const [buildingNum, buildingFnum] = useState<any>('');
    const [login, loginF] = useState<string>('');
    const [id_roli, idF] = useState<number>(0);
    const [Floor, FloorF] = useState<any>('');
    const [room, roomF] = useState<any>('');
    const clickBuilding = async(e:any) => {
      buildingFname(e.target.innerHTML)
      buildingFnum(e.target.id) 
    }
    const changeLogin = async(e:any) => {
      loginF(e.target.innerHTML)
      idF(e.target.id) 
    }
    const changeFloor = (e:any) => FloorF(e.target.value)
    const changeRomm = (e:any) => roomF(e.target.value)
    const avtoriz = () => {return 'fff'} //dispatch()  roles_avtoriz(id_roli,Floor,room,buildingFnum)
   const roles1 = roles.filter((roles)=> roles.status == 0 )
  return (
   <Addtiket
   buildingName={buildingName}
   buildingM={buildingM}
   clickBuilding={clickBuilding}
   login={login}
   Floor={Floor}
   changeLogin={changeLogin}
   changeFloor={changeFloor}
   changeRomm={changeRomm}
   avtoriz={avtoriz}
   roles={roles1}
   room={room}
   />
  );
};

export default  React.memo(AddtiketC);
