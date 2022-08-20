import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { IUser } from '../../inteface/standartInP'
import { AppDispatch } from '../store'
import { testSlice } from './testSlice'



export const userAPI = () => async (dispatch:AppDispatch) =>{
    try{
   
       dispatch(testSlice.actions.loadTest('yy'))
         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
         dispatch(testSlice.actions.trueTest(response.data))
         
        
    }
    catch{
         dispatch(testSlice.actions.errorTest('Не получилось'))
         
    }
}

