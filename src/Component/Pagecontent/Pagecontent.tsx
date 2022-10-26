import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import AddtiketC from "../Addtiket/AddtiketC";
import Colorsystem from "../Colorsystem/Colorsystem";
import ColorsystemC from "../Colorsystem/ColorsystemC";
import Contentrow from "../Contentrow/Contentrow";
import Datatables from "../Datatables/Datatables";
import DepartmentC from "../Department/DepartmentC";
import ObjectC from "../Object/ObjectC";
import Pagehading from "../Pagehading/Pagehading";
import Projectcard from "../Projectcard/Projectcard";
import RolesC from "../Roles/RolesC";


function Pagecontent() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route
          path="/"
          element={[
          // <Pagehading name="Хомяк курица" price={55} />,
          // <Datatables />,
          // <Projectcard />,
           <ColorsystemC />,
          // <Contentrow />
        ]}
        />

        <Route 
        path="/new_tiket" 
        element={<AddtiketC />} 
        /> 


        <Route 
        path="/object" 
        element={<ObjectC />} 
        /> 
        <Route 
        path="/department" 
        element={<DepartmentC />} 
        /> 
        <Route 
        path="/roles" 
        element={<RolesC />} 
        /> 
      </Routes>

    </div>
  );
}

export default Pagecontent;
