import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [toDoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length,
      taskName: newTask,
      completed: false,
    };
    const newTodoList = [...toDoList, task];
    setTodoList(newTodoList);
  };

  const deleteTask = (id) => {
    setTodoList(toDoList.filter((task) => task.id !== id));
  };
  const completeTask = (id) => {
    console.log(toDoList);
    setTodoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else return task;
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask"></div>
      <input onChange={handleChange} />
      <button onClick={addTask}>Add Task</button>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              taskId={task.id}
              deleteTask={(k) => deleteTask(k)}
              completeTask={(k) => completeTask(k)}
              taskCompleted={task.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
