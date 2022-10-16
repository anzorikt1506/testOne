import React from 'react'
import Pagecontent from '../Pagecontent/Pagecontent';
import TopbarC from '../Topbar/TopbarC';
function Maincontent() {
    return ( 
        <div id="content">
        <TopbarC/>
        <Pagecontent/>
       </div>
     );
}

export default Maincontent;