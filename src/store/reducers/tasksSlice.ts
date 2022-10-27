import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itasks } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей
import { AppDispatch } from "../store";
import axios from "axios";
import env from "react-dotenv";
import { data_default, data_old } from "../../hook/redux";

interface UserState {
  //создали интерфейс типов для state редюссора
  tasks: Itasks[];
  data_start:string;
  data_end:string;
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  selected: number;
  element_str:number,
  selected_str:any
}
export const initialState: UserState = {
  tasks: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  selected: 0,
  data_start:data_default(),
  data_end:data_old(15),
  element_str:7,
  selected_str:1
};
export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    select_tasks(state,action: PayloadAction<number>){
     state.selected = action.payload
    },
    element_str_tasks(state,action: PayloadAction<number>){
      state.element_str = action.payload
     },
     selected_str_tasks(state,action: PayloadAction<any>){
      state.selected_str = action.payload
     }, 
    data_old_tasks(state,action: PayloadAction<string>){
      state.data_end = action.payload
     },
     data_start_tasks(state,action: PayloadAction<string>){
      state.data_start = action.payload
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
        `${env.Server_URL}add_tasks`,
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
        

      
    } catch {
      dispatch(tasksSlice.actions.errorTest_tasks("Не получилось"));
    }
  };

  export const tasks_update =(data_start:string,data_end:string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(tasksSlice.actions.loadTest_tasks("yy"));
        const response = await axios.post<Itasks[]>(`${env.Server_URL}tasks_update`,
        {
          data_start,
          data_end
        }
        );
          dispatch(tasksSlice.actions.trueTest_tasks(response.data));
        
      } catch {
        dispatch(tasksSlice.actions.errorTest_tasks("Не получилось"));
      }
    };
  
    export const tasksStartWork = (idTasks:number,idUser:number,status:number) => async (dispatch: AppDispatch) =>{
      try{
        const response = await axios.post<Itasks[]>(`${env.Server_URL}tasksStartWork`,
        {
          idTasks,
          idUser,
          status
        }
        );
        dispatch(tasksSlice.actions.trueTest_tasks(response.data));
       
      }catch{
        dispatch(tasksSlice.actions.errorTest_tasks("Не получилось"));
      }
    }


    export const tasksEndWork = (idTasks:number,status:number) => async (dispatch: AppDispatch) =>{
      try{
        const response = await axios.post<Itasks[]>(`${env.Server_URL}tasksEndWork`,
        {
          idTasks,
          status
        }
        );
        dispatch(tasksSlice.actions.trueTest_tasks(response.data));
       
      }catch{
        dispatch(tasksSlice.actions.errorTest_tasks("Не получилось"));
      }
    }

    export const tasksNoWork = (idTasks:number,text:string) => async (dispatch: AppDispatch) =>{
      try{
        const response = await axios.post<Itasks[]>(`${env.Server_URL}tasksNoWork`,
        {
          idTasks,
          text
        }
        );
        dispatch(tasksSlice.actions.trueTest_tasks(response.data));
       
      }catch{
        dispatch(tasksSlice.actions.errorTest_tasks("Не получилось"));
      }
    }