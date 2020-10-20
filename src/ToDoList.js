import React from "react";

const ToDoList = (props)=>{
  

    return (
    <>
    <div className="todo_style">
         <li> {props.text}</li>
         <i className="far fa-trash-alt"
         onClick={()=> {
             props.onSelect(props.id)
         }}
         ></i>
    </div>
    </>
    )   
}

export default ToDoList;