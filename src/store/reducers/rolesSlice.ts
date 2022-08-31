import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  IRoles } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей
import { AppDispatch } from "../store";
import axios from "axios";

interface UserState {
  //создали интерфейс типов для state редюссора
  roles: IRoles[];
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  selected: number
}
export const initialState: UserState = {
  roles: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  selected: 0
};
export const rolesSlice = createSlice({
  name: "rolesSlice",
  initialState,
  reducers: {
    roles_selectDepartment(state,action: PayloadAction<number>){
     state.selected = action.payload
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
      const response = await axios.get<IRoles[]>("http://localhost:5000/rolesSpis");
      dispatch(rolesSlice.actions.roles_trueTest(response.data));
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };

export const roles_add_API = (id_object: number, id_department: number,name:any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(rolesSlice.actions.roles_loadTest("yy"));
      const response = await axios.post<IRoles[]>(
        "http://localhost:5000/addroles",
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
        "http://localhost:5000/redroles",
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
        "http://localhost:5000/rolesdel",
        {
          id: id
        }
      );
      dispatch(rolesSlice.actions.roles_trueTest(response.data));
    } catch {
      dispatch(rolesSlice.actions.roles_errorTest("Не получилось"));
    }
  };



