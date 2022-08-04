import * as React from 'react';
import { combineReducers, configureStore } from "@reduxjs/toolkit";//Импорт нужных иструментов
import userReducer from "./reducers/testSlice";
//создание списка редюссоров
const rootReducer =  combineReducers({
    userReducer
})
//Создание Store
export const  setupStore = () => {
       return configureStore({
        reducer: rootReducer
       })

}
export type RootState = ReturnType<typeof rootReducer> // определяем тип состояния
export type AppStore = ReturnType<typeof setupStore> // определяем тип состояния
export type AppDispatch = AppStore['dispatch']