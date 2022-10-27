import React, { useReducer } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { useEffect, useState } from "react";
import Content from './Component/Content/Content';
import Sitebar from './Component/Sitebar/Sitebar';
import LoginC from './Component/Login/LoginC';
import { roles_add_API_spis, roles_refresh } from './store/reducers/rolesSlice';
import { isAnyOf } from '@reduxjs/toolkit';
import { tasks_update } from './store/reducers/tasksSlice';
import { object_add_API_spis } from './store/reducers/objectSlice';
import { department_add_API_spis } from './store/reducers/departmentSlice';
import { users_add_API_spis } from './store/reducers/usersSlice';




 
 
	 
// function notifyMe() {
//   if (!("Notification" in window)) {
//     alert("Браузер не поддерживает уведомления");
//   } else if (Notification.permission === "granted") {
//     const notification = setTimeout(()=>{new Notification("Hi there!", {
// 			tag : "ache-mail",
// 			body : "Пора сделать паузу и отдохнуть",
// 			icon : "http://kinolife.su/content/img/kino-img/15693665524683.jpg"
// 		})}, 2000)  ;
//   } else if (Notification.permission !== "denied") {
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//         const notification = setTimeout(()=>{new Notification("Hi there!")}, 2000)  ;
//       }
//     });
//   }
// }

function App() {
  const {status} = useAppSelector((state)=>state.rolesSlice)
  const {data_start,data_end,tasks} = useAppSelector((state)=>state.tasksSlice)
  const {object} = useAppSelector((state)=>state.objectSlice)
  const {department} = useAppSelector((state)=>state.departmentSlice)
  const {roles} = useAppSelector((state)=>state.rolesSlice)
  const {users} = useAppSelector((state)=>state.usersSlice)
  const dispatch = useAppDispatch()
  
  useEffect(() => { 
    if (localStorage.getItem('token')) {dispatch(roles_refresh())}
      if(Object(tasks).length == 0){dispatch(tasks_update(data_start,data_end))}
      if(Object(object).length == 0){dispatch(object_add_API_spis(""));}
      if(Object(department).length == 0){dispatch(department_add_API_spis(''));}
      if(Object(users).length == 0){ dispatch(users_add_API_spis());;}
  }, []);


 



  switch (true) {
    case (status == 5) :
      return <LoginC/>
      break;
    case (status == 0 || status == 1 || status == 2 || status == 3) :
     return(<Content/>)
      break;
  
    default:
      break;
  }
  return (
    <>

    </>
  );
}

export default App;
