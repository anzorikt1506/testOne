import * as React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей 


interface UserState { //создали интерфейс типов для state редюссора
    user: IUser[]
    isLoading: boolean
    error: string
    test: number
}
export const initialState: UserState = {
     user: [],
     isLoading: false,
     error: '',
     test: 0,

}
export const testSlice = createSlice({
    name: 'Test',
    initialState,
    reducers:{
        loadTest(state,action: PayloadAction<string>){
          state.isLoading = true
        },
        trueTest(state,actions:PayloadAction<IUser[]>){
          state.isLoading = false
          state.user = actions.payload
          state.error = ''
        },
        errorTest(state, action: PayloadAction<string>){
          state.isLoading = false
          state.error = action.payload          
        }
    }

})

export default testSlice.reducer