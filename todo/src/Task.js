export const Task = (props) => {
  return (
    <div style={{ backgroundColor: props.taskCompleted ? "green" : "white" }}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.taskId)}>X</button>
      <button onClick={() => props.completeTask(props.taskId)}>Complete</button>
    </div>
  );
};
