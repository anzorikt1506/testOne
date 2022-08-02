import React from 'react'
import Pagecontent from '../Pagecontent/Pagecontent';
import Topbar from '../Topbar/Topbar';
function Maincontent() {
    return ( 
        <div id="content">
        <Topbar/>
        <Pagecontent/>
       </div>
     );
}

export default Maincontent;