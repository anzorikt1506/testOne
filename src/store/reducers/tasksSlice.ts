import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itasks } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей
import { AppDispatch } from "../store";
import axios from "axios";

interface UserState {
  //создали интерфейс типов для state редюссора
  tasks: Itasks[];
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  selected: number
}
export const initialState: UserState = {
  tasks: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  selected: 0
};
export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    select_tasks(state,action: PayloadAction<number>){
     state.selected = action.payload
    },
    loadTest_tasks(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    trueTest_tasks(state, actions: PayloadAction<Itasks[]>) {
      state.isLoading = false;
      state.tasks = actions.payload;
      state.error = "";
      state.verithik = "";
      state.booleanverithik = false;
    },
    errorTest_tasks(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.verithik = "";
      state.booleanverithik = false;
    },
  },
});

export default tasksSlice.reducer;

export const tasks_add =(
  id_roles: number,
  id_department:number,
  id_object:number,
  building:number,
  room:number,
  floor:number,
  opisanie:string,
) => async (dispatch: AppDispatch) => {
    try {
      dispatch(tasksSlice.actions.loadTest_tasks("yy"));
      const response = await axios.post<Itasks[]>(
        "http://localhost:5000/add_tasks",
        {
          id_roles,
          id_department,
          id_object,
          building,
          room,
          floor,
          opisanie
        }
      );

        dispatch(tasksSlice.actions.trueTest_tasks(response.data));
        window.history.pushState('','/');
        console.log(response.data)
      
    } catch {
      dispatch(tasksSlice.actions.errorTest_tasks("Не получилось"));
    }
  };

