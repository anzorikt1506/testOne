import React, { useReducer } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { testSlice } from './store/reducers/testSlice';

import Content from './Component/Content/Content';
import Sitebar from './Component/Sitebar/Sitebar';



	
function notifyMe() {
  if (!("Notification" in window)) {
    alert("Браузер не поддерживает уведомления");
  } else if (Notification.permission === "granted") {
    const notification = setTimeout(()=>{new Notification("Hi there!", {
			tag : "ache-mail",
			body : "Пора сделать паузу и отдохнуть",
			icon : "http://kinolife.su/content/img/kino-img/15693665524683.jpg"
		})}, 2000)  ;
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = setTimeout(()=>{new Notification("Hi there!")}, 2000)  ;
      }
    });
  }
}

function App() {
console.log()
  return (
    <>
    <div id="wrapper">
 <input type="button" onClick={notifyMe} value="Notification"/> 
    <Sitebar/>
    <Content/>
    </div>
    </>
  );
}

export default App;
