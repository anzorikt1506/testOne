import * as React from 'react';

export interface standartInP{
    name: string
    price: number
}
export interface IUser{
    id: number
    name: string
    email: string
    phone: string
    website: string
    username: string
}
export interface IObject{
    id: number
    name: string
    bool?: boolean
}
export interface Idepartment{
    id: number
    id_object: number
    name: string
    bool?: boolean
}
export interface IRoles{
    id: number
    id_object: number
    id_department: number
    name: string
    bool?: boolean
}