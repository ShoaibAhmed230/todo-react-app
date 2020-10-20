import React, { useState } from "react";
import ToDoList from"./ToDoList"; 
import"./App.css";

const App = ()=>{

  const [inputList, setInputList] = useState("");
  const [Items, setItems]= useState([]);

  const itemEvent = (event)=>{
      setInputList(event.target.value)
  };

  const listOfItems = ()=>{
      setItems((oldItems) => {
        return[...oldItems, inputList];
      });
      setInputList("")
  };

  const deleteItems=(id)=>{
    console.log("delet")

    setItems((oldItems)=> {
      return oldItems.filter((ayyElm, index)=>{
        return index !== id;
            })
    })
}
  return(
     <>
         <div className="container">
             <h1>ToDo List</h1>
             <input type="text" placeholder="Write To do" value={inputList} onChange={itemEvent}/>
             <button onClick={listOfItems}>Add</button>

             <ol>
                  {/* <li> {inputList}</li> */}

                    {Items.map( (itemval, index) =>{
                     return <ToDoList 
                     key={index}
                     id={index}
                     onSelect={deleteItems}
                     text={itemval}/>
                    })}


             </ol>
         </div>
     </>
  )
 }
export default App;
