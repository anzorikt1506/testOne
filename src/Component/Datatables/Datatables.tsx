import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { userAPI } from '../../store/reducers/userAPI';
function Datatables() {
  const dispatch = useAppDispatch();
  const {error, isLoading, user} = useAppSelector(state => state.userReducer)
  const QQQQ = () =>{
    dispatch(userAPI()) 
    console.log('render')
  }
//   useEffect(()=>{}, [])

  
    return ( 
        
        <div className="card shadow mb-4">
         <button onClick={QQQQ}>111111</button>   
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
                    {isLoading && <h1>Идёт загрузка</h1>}
                    {error && <h1>{error}</h1>}
                     {user.map((user)=>
                     
                     <tr key = {user.id}>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.phone}</td>
                     <td>{user.website}</td>
                     <td>{user.username}</td>
                     <td>$320,800</td>
                     </tr>
                     
                     )}                 

                        

                    </tbody>
                </table>
            </div>
        </div>
    </div>
     );
}

export default Datatables;