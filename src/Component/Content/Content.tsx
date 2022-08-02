import React from "react";
import CSS from "csstype";
import Topbar from "../Topbar/Topbar";
import Maincontent from "../Maincontent/Maincontent";
import Footer from "../Footer/Footer";
const Content = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <Maincontent />
      <Footer />
    </div>
  );
};

export default Content;
