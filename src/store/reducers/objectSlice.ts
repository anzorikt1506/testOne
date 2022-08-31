import * as React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IObject } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей
import { AppDispatch } from "../store";
import axios from "axios";

interface UserState {
  //создали интерфейс типов для state редюссора
  object: IObject[];
  isLoading: boolean;
  error: string;
  verithik: string;
  booleanverithik: boolean;
  selected: number
}
export const initialState: UserState = {
  object: [],
  isLoading: false,
  error: "",
  verithik: "",
  booleanverithik: false,
  selected: 0
};
export const objectSlice = createSlice({
  name: "objectSlice",
  initialState,
  reducers: {
    selectObject(state,action: PayloadAction<number>){
     state.selected = action.payload
    },
    loadTest(state, action: PayloadAction<string>) {
      state.isLoading = true;
    },
    trueTest(state, actions: PayloadAction<IObject[]>) {
      state.isLoading = false;
      state.object = actions.payload;
      state.error = "";
      state.verithik = "";
      state.booleanverithik = false;
    },
    trueVerithik(state, actions: PayloadAction<string>) {
      state.isLoading = false;
      state.verithik = actions.payload;
      state.booleanverithik = true;
      state.error = "";
    },
    falseVerithik(state, actions: PayloadAction<boolean>) {
      state.booleanverithik = actions.payload;
    },
    errorTest(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
      state.verithik = "";
      state.booleanverithik = false;
    },
  },
});

export default objectSlice.reducer;

export const object_add_API =
  (name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(objectSlice.actions.loadTest("yy"));
      const response = await axios.post<IObject[]>(
        "http://localhost:5000/object",
        {
          nameObject: name,
        }
      );
      if (response.data[0].bool === true) {
        dispatch(objectSlice.actions.trueVerithik(response.data[0].name));
      } else {
        dispatch(objectSlice.actions.trueTest(response.data));
      }
    } catch {
      dispatch(objectSlice.actions.errorTest("Не получилось"));
    }
  };

export const object_add_API_spis =
  (name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(objectSlice.actions.loadTest("yy"));
      const response = await axios.post<IObject[]>(
        "http://localhost:5000/objectspis",
        {
          nameObject: name,
        }
      );
      dispatch(objectSlice.actions.trueTest(response.data));
    } catch {
      dispatch(objectSlice.actions.errorTest("Не получилось"));
    }
  };

  export const object_udate_name =
  (name: string,id:number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(objectSlice.actions.loadTest("yy"));
      const response = await axios.post<IObject[]>(
        "http://localhost:5000/objectupdate",
        {
          name: name,
          id: id
        }
      );
      dispatch(objectSlice.actions.trueTest(response.data));
    } catch {
      dispatch(objectSlice.actions.errorTest("Не получилось"));
    }
  };

  export const object_del_name =
  (id:number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(objectSlice.actions.loadTest("yy"));
      const response = await axios.post<IObject[]>(
        "http://localhost:5000/objectdel",
        {
          id: id
        }
      );
      dispatch(objectSlice.actions.trueTest(response.data));
    } catch {
      dispatch(objectSlice.actions.errorTest("Не получилось"));
    }
  };

  export const object_update_table =
  (id_object:number, id:number, table:number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(objectSlice.actions.loadTest("yy"));
      const response = await axios.post<IObject[]>(
        "http://localhost:5000/objectUpdateTable",
        {
          id_object: id_object,
          id: id,
          table:table
        }
      );
      dispatch(objectSlice.actions.trueTest(response.data));
    } catch {
      dispatch(objectSlice.actions.errorTest("Не получилось"));
    }
  };