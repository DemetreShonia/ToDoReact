import "./App.css";
import { useState } from "react";

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1] + 1,
      taskName: newTask,
    };
    const newTodoList = [...toDoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(toDoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask"></div>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
