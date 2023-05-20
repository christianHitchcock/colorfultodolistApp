import React,{useState} from "react";
import Inputfield from "./inputfield";
import CheckboxSection from "../checkboxsection/checkedbox"
import {CloseIcon} from '@chakra-ui/icons'




function ToDoItem(props){
  const [isStriked, setIsStriked] = useState(false);

  const handleOnClick = () => {
    setIsStriked(!isStriked);
  };
  
  
  return(
    <div>
      <li>
        <div className="todolistItem">
        <div className="todotext" style={{ textDecoration: isStriked ? "line-through" : "none" }} onClick={handleOnClick} >
       
        <CheckboxSection defaultChecked={props.completed} />
        {props.text}
        </div>
        </div>
      </li> 
     </div>
  )
}


function NewList() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [hideContainer, showContainer] = useState(false);


  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  
  function deleteItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  function deleteAll(){
    setItems([]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
    showContainer(true)
  }
  function toggleTaskCompleted() {
    console.log(items[0]);
  }

  function showAll() {
   setItems(items);
  }
    return (
      <div>
        <div>
          <form onSubmit ={handleSubmit}  onChange={handleChange} >
          <Inputfield value={inputText}/>
          
          </form>
         
        </div>

        <div className="todolistBox">
        <ul>
          {items.map((todoItem, i) => (
            <div>
              <div className="container">
               <ToDoItem
               index={i}
               key={todoItem.id}
              text={todoItem}
              completed={todoItem.completed} 
            />
              <CloseIcon
               margin= '10px'
               color={'hsl(236, 9%, 61%)'}
               onClick={() => deleteItem(i)}
               />

            </div> 
            <hr/>
            </div>
              
          )
          )}
           {hideContainer && (<div className="second_container" id="secondContainer">
            <p>5 items left</p>
            <div id="controlBtnBox">
            <button onClick={showAll}>All</button>
            <button>Active</button>
            <button onClick={toggleTaskCompleted}>Completed</button>
            </div>
            <p onClick={deleteAll}>Clear Completed</p>
          </div>)}
        </ul>
      </div> 
      </div>
    );
  }



export default NewList;