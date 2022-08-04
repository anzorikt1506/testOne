import * as React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../inteface/standartInP"; //импортировали интерфейс type пользователей 

interface UserState { //создали интерфейс типов для state редюссора
    user: IUser[]
    isLoading: boolean
    error: string
    test: number
}
const initialState: UserState = {
     user: [],
     isLoading: false,
     error: '',
     test: 0

}
export const testSlice = createSlice({
    name: 'Test',
    initialState,
    reducers:{
        
          increment(state, action: PayloadAction<number>){
            state.test += action.payload
          },
          increment1(state, action: PayloadAction<number>){
            state.test -= action.payload
          }
    }
})

export default testSlice.reducer