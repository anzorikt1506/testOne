import React from 'react';
import './App.css';
import Content from './Component/Content/Content';
import Sitebar from './Component/Sitebar/Sitebar';

function App() {
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
