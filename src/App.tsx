import React, { useReducer } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hook/redux';
import { testSlice } from './store/reducers/testSlice';

import Content from './Component/Content/Content';
import Sitebar from './Component/Sitebar/Sitebar';




function App() {
console.log()
  return (
    <>
    <div id="wrapper">
    <Sitebar/>
    <Content/>
    </div>
    </>
  );
}

export default App;
