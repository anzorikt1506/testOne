import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "../store";
import axios from "axios";
import { Iusers } from "../../inteface/standartInP";
import env from "react-dotenv";

interface UserState {
  //создали интерфейс типов для state редюссора
  users: Iusers[];
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  status: number
}
export const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  status: 5,
};
export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    users_statusDepartment(state,action: PayloadAction<number>){
     state.status = action.payload
    },
    users_loadTest(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    users_trueTest(state, actions: PayloadAction<Iusers[]>) {
      state.isLoading = false;
      state.users = actions.payload;
      state.error = "";
      state.verithik = "";
      state.booleanverithik = false;
    },
    users_trueVerithik(state, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.verithik = actions.payload;
      state.booleanverithik = true;
      state.error = "";
    },
    users_falseVerithik(state, actions: PayloadAction<boolean>) {
      state.booleanverithik = actions.payload;
    },
    users_object(state, actions: PayloadAction<Iusers[]>) {
      state.users = actions.payload;
    },
    users_errorTest(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.verithik = "";
      state.booleanverithik = false;
    },
  },
});

export default usersSlice.reducer;

export const users_add_API_spis =() => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.users_loadTest("yy"));
      const response = await axios.get<Iusers[]>(`${env.Server_URL}usersSpis`);
      dispatch(usersSlice.actions.users_trueTest(response.data));
    } catch {
      dispatch(usersSlice.actions.users_errorTest("Не получилось"));
    }
  };

export const users_add_API = (id_object: number, id_department: number,id_roli:number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.users_loadTest("yy"));
      const response = await axios.post<Iusers[]>(
        `${env.Server_URL}addusers`,
        {
          id_department: id_department,
          id_object: id_object,
          id_roli: id_roli,
          name:name
        }
      );
      if (response.data[0].bool === true) {
        dispatch(usersSlice.actions.users_trueVerithik(response.data[0].fio));
      } else {
        dispatch(usersSlice.actions.users_trueTest(response.data));
      }
    } catch {
      dispatch(usersSlice.actions.users_errorTest("Не получилось"));
    }
  };


  export const users_red_API = (id: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.users_loadTest("yy"));
      const response = await axios.post<Iusers[]>(
        `${env.Server_URL}redusers`,
        {
          id: id,
          name:name
        }
      );
      if (response.data[0].bool === true) {
        dispatch(usersSlice.actions.users_trueVerithik(response.data[0].fio));
      } else {
        dispatch(usersSlice.actions.users_trueTest(response.data));
      }
    } catch {
      dispatch(usersSlice.actions.users_errorTest("Не получилось"));
    }
  };



  export const users_del = (id:number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(usersSlice.actions.users_loadTest("yy"));
      const response = await axios.post<Iusers[]>(
        `${env.Server_URL}usersdel`,
        {
          id: id
        }
      );
      dispatch(usersSlice.actions.users_trueTest(response.data));
    } catch {
      dispatch(usersSlice.actions.users_errorTest("Не получилось"));
    }
  };

  export const users_option = (id_users:number, option:number) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<Iusers[]>(
        `${env.Server_URL}usersoption`,
        {
          id_users: id_users,
          option: option
        }
      );
      dispatch(usersSlice.actions.users_trueTest(response.data));
    } catch {
      dispatch(usersSlice.actions.users_errorTest("Не получилось"));
    }
  };

  export const users_password = (id_users:number, password:any) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.post<Iusers[]>(
        `${env.Server_URL}userspassword`,
        {
          id_users: id_users,
          password: password
        }
      );
      dispatch(usersSlice.actions.users_trueTest(response.data));
    } catch {
      dispatch(usersSlice.actions.users_errorTest("Не получилось"));
    }
  };

