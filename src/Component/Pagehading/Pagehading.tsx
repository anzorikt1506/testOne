import axios from 'axios';
import {standartInP} from "../../inteface/standartInP"
const Pagehading: React.FC<standartInP> =({
  name,price}
) => {

  
   return ( 
      
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{name}</h1>
        <span  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</span>
       </div>
     );
}

export default Pagehading;