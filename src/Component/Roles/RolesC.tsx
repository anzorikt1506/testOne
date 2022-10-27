import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { department_add_API_spis } from '../../store/reducers/departmentSlice';
import { object_add_API_spis } from '../../store/reducers/objectSlice';
import { users_add_API_spis } from '../../store/reducers/usersSlice';
import  {rolesSlice, roles_add_API, roles_add_API_spis, roles_del, roles_red_API } from '../../store/reducers/rolesSlice';

import Roles from './Roles';
const RolesC: React.FC = () => {
  const dispatch = useAppDispatch();
  const {roles , error} = useAppSelector((state) => state.rolesSlice);

 




 



  
  return (
    <Roles
      roles={roles}
      error={error}

    />
  );
}

export default React.memo(RolesC) ;
