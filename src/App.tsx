import React, { useReducer } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { testSlice } from './store/reducers/testSlice';
import { useEffect, useState } from "react";
import Content from './Component/Content/Content';
import Sitebar from './Component/Sitebar/Sitebar';
import LoginC from './Component/Login/LoginC';
import { roles_refresh } from './store/reducers/rolesSlice';



	
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
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
       dispatch(roles_refresh())
      }

  }, []);

  switch (true) {
    case (status == 0) :
      return <LoginC/>
      break;
    case (status == 1 || status == 2 || status == 3) :
     return(
       
          <Content/>
          
       
     )
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
