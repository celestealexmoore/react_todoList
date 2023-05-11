import "./App.css";
import { useState } from "react";
import Todos from "../Todos/Todos.js";

function App() {
  let taskArr = [];
  let userInput;

  // let [input, setInput] = useState("");

  function updateInput(e) {
    userInput = e.target.value;
    // setInput(e.target.value);
  }

  function addTask() {
    console.log(userInput);
    taskArr.push(userInput);
    console.log(taskArr);
    // setInput("");
  }

  return (
    <>
      <div className="app">
        <h1 className="title">todos</h1>

        <div className="inputParent">
          <input
            type="text"
            className="input"
            placeholder="Add Todo..."
            onChange={updateInput}
          />
          <button type="submit" className="inputBtn" onClick={addTask}>
            Submit
          </button>
        </div>

        <Todos taskArr={taskArr} />
      </div>
    </>
  );
}

export default App;
