import "./App.css";
import Todos from "../Todos/Todos.js";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="title">todos</h1>

        <div className="inputParent">
          <input type="text" className="input" placeholder="Add Todo..." />
          <button type="submit" className="inputBtn">
            Submit
          </button>
        </div>

        <Todos />
      </div>
    </>
  );
}

export default App;
