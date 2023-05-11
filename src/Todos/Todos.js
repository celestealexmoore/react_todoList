import "./Todos.css";
import { useState } from "react";

function Todos(props) {
  const [checked, setChecked] = useState(false);

  function isChecked() {
    !checked ? setChecked(true) : setChecked(false);
  }

   /* 
  Store what is in taskArr to localStorage.
  Then I want to map over the taskArr.
  For each task, create a todo div element in the child component.
  */

  return (
    <div className="todosParent">
      {props.taskArr.map((task) => {
        return (
          <div className="indTask">
            <input type="checkbox" className="checkbox" onClick={isChecked} />
            <p className={`${checked ? "completed" : ""}`}>{task}</p>
            <button className="deleteBtn">Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
