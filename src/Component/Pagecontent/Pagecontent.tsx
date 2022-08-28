import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import Colorsystem from "../Colorsystem/Colorsystem";
import Contentrow from "../Contentrow/Contentrow";
import Datatables from "../Datatables/Datatables";
import DepartmentC from "../Department/DepartmentC";
import ObjectC from "../Object/ObjectC";
import Pagehading from "../Pagehading/Pagehading";
import Projectcard from "../Projectcard/Projectcard";


function Pagecontent() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route
          path="/"
          element={[
          <Pagehading name="Хомяк курица" price={55} />,
          <Datatables />,
          <Projectcard />,
          <Colorsystem />,
          <Contentrow />
        ]}
        />

        <Route 
        path="/object" 
        element={<ObjectC />} 
        /> 
        <Route 
        path="/department" 
        element={<DepartmentC />} 
        /> 
      </Routes>

    </div>
  );
}

export default Pagecontent;
