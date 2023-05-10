import "./Todos.css";
import { useState } from "react";

function Todos() {
  let [checked, setChecked] = useState(false);

  function isChecked() {
    !checked ? setChecked(true) : setChecked(false);
  }

  return (
    <div className="todosParent">
      <div className="indTask">
        <input type="checkbox" className="checkbox" onClick={isChecked} />
        <p className={`${checked ? "completed" : ""}`}>Task One</p>
        <button className="deleteBtn">Delete</button>
      </div>
    </div>
  );
}

export default Todos;
