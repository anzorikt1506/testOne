import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes} from "react-router-dom";
import Colorsystem from "../Colorsystem/Colorsystem";
import Contentrow from "../Contentrow/Contentrow";
import Datatables from "../Datatables/Datatables";
import Pagehading from "../Pagehading/Pagehading";
import Projectcard from "../Projectcard/Projectcard";

function Pagecontent() {
  return (
    <div className="container-fluid">
     

<Routes>
<Route path="/55" element={<Pagehading name="Dashboard" price={55}/>}/></Routes>
        <Contentrow />
        <Projectcard />
        <Colorsystem />
        <Datatables />


     
    </div>
  );
}

export default Pagecontent;
