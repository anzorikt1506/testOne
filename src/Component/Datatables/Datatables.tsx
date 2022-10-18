import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/redux';

function Datatables() {
  const dispatch = useAppDispatch();



  
    return ( 
        
        <div className="card shadow mb-4">
         <button >111111</button>   
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>
                    <tbody>
             
                     
                     <tr>
                     <td></td>

                     </tr>
                     
                                   

                        

                    </tbody>
                </table>
            </div>
        </div>
    </div>
     );
}

export default Datatables;