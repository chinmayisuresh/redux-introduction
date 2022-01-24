import { ADD_TODO, GET_TODO, TOGGLE } from "./actionTypes"

const init={todo:[] , load:true};

export const reducer = (state=init,{type,payload})=>{
   switch (type){
       case GET_TODO:
           return {...state,todo:payload , load:false}

        
           default:return state
   }
}