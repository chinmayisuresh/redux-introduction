import { ADD_TODO, GET_TODO, TOGGLE } from "./actionTypes";

export const addTodo=(data)=>({
    type:ADD_TODO,payload:data
})

export const toggleStatus=(data)=>({
    type:TOGGLE,payload:data
})

export const getTodo=(data)=>({
    type:GET_TODO,payload:data
})

export const getTodoloading=()=>({
    type:GET_TODO
})

