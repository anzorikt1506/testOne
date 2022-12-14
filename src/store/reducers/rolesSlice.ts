import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  avtorizRole, IRoles } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей
import { AppDispatch } from "../store";
import axios from "axios";
import $api from "../../interceptor/intercepter";
import env from "react-dotenv";

interface UserState {
  //создали интерфейс типов для state редюссора
  roles: IRoles[];
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  status: number,
  name:string,
  id:number
}
export const initialState: UserState = {
  roles: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  status: 5,
  name:"",
  id:0
};
export const rolesSlice = createSlice({
  name: "rolesSlice",
  initialState,
  reducers: {
    roles_statusDepartment(state,action: PayloadAction<number>){
     state.status = action.payload
    },
    roles_id_roles(state,action: PayloadAction<number>){
      state.id = action.payload
     },
    roles_loadTest(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },

    roles_trueTest(state, actions: PayloadAction<IRoles[]>) {
      state.isLoading = false;
      state.roles = actions.payload;
      state.error = "";
      state.verithik = "";
      state.booleanverithik = false;
    },
    roles_trueVerithik(state, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.verithik = actions.payload;
      state.booleanverithik = true;
      state.error = "";
    },
    roles_isLoading_false(state) {
      state.isLoading = false;
    },
    roles_status(state,action: PayloadAction<number>) {
      state.status = action.payload;
    },
    roles_name(state,action: PayloadAction<string>) {
      state.name = action.payload;
    },
    roles_falseVerithik(state, actions: PayloadAction<boolean>) {
      state.booleanverithik = actions.payload;
    },
    roles_object(state, actions: PayloadAction<IRoles[]>) {
      state.roles = actions.payload;
    },
    roles_errorTest(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.verithik = "";
      state.booleanverithik = false;
    },
  },
});

export default rolesSlice.reducer;

export const roles_add_API_spis =() => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.get<IRoles[]>(`${env.Server_URL}rolesSpis`);
      dispatch(rolesSlice.actions.roles_trueTest(response.data));
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

export const roles_add_API = (id_object: number, id_department: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}addroles`,
        {
          id_department: id_department,
          id_object: id_object,
          name:name
        }
      );
      if (response.data[0].bool === true) {
        dispatch(rolesSlice.actions.roles_trueVerithik(response.data[0].name));
      } else {
        dispatch(rolesSlice.actions.roles_trueTest(response.data));
      }
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };


  export const roles_red_API = (id: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}redroles`,
        {
          id: id,
          name:name
        }
      );
      if (response.data[0].bool === true) {
        dispatch(rolesSlice.actions.roles_trueVerithik(response.data[0].name));
      } else {
        dispatch(rolesSlice.actions.roles_trueTest(response.data));
      }
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_red_pass = (id: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}redpassroles`,
        {
          id: id,
          name:name
        }
      );
      if (response.data[0].bool === true) {
        dispatch(rolesSlice.actions.roles_trueVerithik(response.data[0].name));
      } else {
        dispatch(rolesSlice.actions.roles_trueTest(response.data));
      }
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_red_email = (id: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}redemailroles`,
        {
          id: id,
          name:name
        }
      );
      if (response.data[0].bool === true) {
        dispatch(rolesSlice.actions.roles_trueVerithik(response.data[0].name));
      } else {
        dispatch(rolesSlice.actions.roles_trueTest(response.data));
      }
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_del = (id:number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}rolesdel`,
        {
          id: id
        }
      );
      dispatch(rolesSlice.actions.roles_trueTest(response.data));
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_option = (id_roles:number, option:number) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}rolesoption`,
        {
          id_roles: id_roles,
          option: option
        }
      );
      dispatch(rolesSlice.actions.roles_trueTest(response.data));
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_red_paswword = (id: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        `${env.Server_URL}redrolespassword`,
        {
          id: id,
          name:name
        }
      );
        dispatch(rolesSlice.actions.roles_isLoading_false);

    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_avtoriz =(login:number,password:string) => async (dispatch: AppDispatch) => {
    try {
      const response = await $api.post<avtorizRole>(
        `${env.Server_URL}rolesavtoriz`,
        {login,password}
        );
        localStorage.setItem('token',response.data.token.accessToken)
        dispatch(rolesSlice.actions.roles_status(response.data.status));
        dispatch(rolesSlice.actions.roles_name(response.data.name));
        dispatch(rolesSlice.actions.roles_id_roles(response.data.id)); 
      
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_refresh =() => async (dispatch: AppDispatch) => {
    try {
      const response = await $api.get(`${env.Server_URL}refresh`);
        dispatch(rolesSlice.actions.roles_status(response.data.status));
        dispatch(rolesSlice.actions.roles_name(response.data.name));
        dispatch(rolesSlice.actions.roles_id_roles(response.data.id)); 
        localStorage.setItem('token',response.data.token.accessToken)
        console.log(response.data.status);
      
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

  export const roles_out =() => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.get(`${env.Server_URL}logout`,{ withCredentials:true});
        dispatch(rolesSlice.actions.roles_status(5));
        dispatch(rolesSlice.actions.roles_name(''));
        localStorage.removeItem('token');
      
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };
  