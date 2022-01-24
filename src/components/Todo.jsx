import axios from "axios";
import { status } from "express/lib/response";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo, toggleStatus } from "../features/actions";

export const Todo = () =>{
    const [form,setForm]=useState({status:false,task:""});

    const todo=useSelector((state)=>state.todo)
    const load=useSelector((state)=>state.load)
     
      const dispatch=useDispatch();
    const handleChange=(e)=>{
           e.preventDefault();
           let {name,value}=e.target;
           setForm({
               ...form,
               [name] : value
           })
    }
     const handleSubmit=(e)=>{
         e.preventDefault();
         console.log(form);
         
         axios.post('http://localhost:3001/todo' , form)
         .then((res) => getData())
               
     }

     const getData = () => {

            axios.get('http://localhost:3001/todo')
            .then((res) => dispatch(getTodo(res.data)) ) 
        
     }

     useEffect(() => {
         getData();
     } , [])

     const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/todo/${id}`)
        .then((res) => getData())
     }
     
    //  const handleToggle=(e)=>{

    //     let change = e.status;
    //     if(change === true){
    //         change = false
    //     }

    //     let id = e.id;
    //     console.log(e.id)
         
    //     axios.patch(`http://localhost:3001/todo/${id}` , {status:change})
    //     .then((res) => getData())
    //  }


     if(load === true){
         return(
             <h1>....loading</h1>
         )
     }

     return (
    <>
    <form>
        <input onChange={handleChange} type='text' name='task'></input>
        <input onClick={handleSubmit} type='submit'></input>

    </form>

    
    {todo.map((e)=>(
            <div>
                <i>{e.task}</i>
                <i>{e.status ? <i>completed</i>: <i>not completed</i> }</i>
                <button>toggle</button>
                <button onClick={() => handleDelete(e.id)}>delete</button>
            </div>
        ))
}
    
  
    </>

     )

}