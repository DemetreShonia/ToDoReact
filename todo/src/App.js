import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const newTodoList = [...toDoList, newTask];
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask"></div>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <div className="list">
        {toDoList.map((task) => {
          return <h1>{task}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
