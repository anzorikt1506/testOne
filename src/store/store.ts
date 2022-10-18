import * as React from 'react';
import { combineReducers, configureStore } from "@reduxjs/toolkit";//Импорт нужных иструментов
import objectSlice from './reducers/objectSlice';
import departmentSlice from './reducers/departmentSlice';
import rolesSlice from './reducers/rolesSlice';
import usersSlice from './reducers/usersSlice';
import tasksSlice from './reducers/tasksSlice';
//создание списка редюссоров
const rootReducer =  combineReducers({
    objectSlice,
    departmentSlice,
    rolesSlice,
    usersSlice,
    tasksSlice
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