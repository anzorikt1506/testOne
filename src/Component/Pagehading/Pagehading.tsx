import axios from 'axios';
import {standartInP} from "../../inteface/standartInP"
function Pagehading({
  name,price}:standartInP
) {

  
const ff = () => {
  axios.post('http://localhost:5000/', {
    firstName: 'Fredy',
    lastName: 97,
    id: 3
})
.then(function (response) {
    console.log(response);
    alert(response.data[0].name)
})
.catch(function (error) {
    console.log(error.message);
});
}
    return ( 
      
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">{name}</h1>
        <span onClick={ff} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</span>
       </div>
     );
}

export default Pagehading;