import Display from "./components/Display";
import Input from "./components/Input";
import { useState } from "react";
import DeleteList from "./components/DeletedList";
import './index.css';


const App = () => {
  // DISPLAY
  // INPUT
  const [input, setInput] = useState("");
  // DISPLAY LIST
  const [toDo, setToDo] = useState([]);

  const[deletedList, setDeletedList] = useState([]);

  // input 
  const addHandler = (event) => {
    setInput(event.target.value);
  };

// SUBMIT BUTTON
  const handleClick = () => {
    
  
  let storedList = [...toDo];
  storedList.push(input);
  setToDo(storedList);
    


///////Tried to create an input for the enter key :( it didnt work

//  const addEventListener = (event) => {
//      if (event.keycode == 13){
        
//     let storedList = [...toDo];
//   storedList.push(input);
//   setToDo(storedList);


//     }
//   }

   }
    
  ;


  // DELETE
  const removeHandler = (index, i) => {
    let deleted = [...deletedList];
    deleted.push(i);
    setDeletedList(deleted);



    let storedArr = [...toDo];
    storedArr.splice(index, 1);
    setToDo(storedArr);
  };

  return (
    <main className="mainContainer">
      
      <div className="header">
        <h1>To Do List</h1>
      </div>

      <div className="Container">

        <div className="InputContainer">
          <Input addHandler={addHandler} handleClick={handleClick}/>
        </div>

        <div className="displayContainer">
          <Display toDo={toDo} removeHandler={removeHandler} />
        </div>

      <div>
     {/* <DeleteList delete={deletedList}/> */}
     </div>
      
    </div>
    </main>
  );
  };

export default App;
