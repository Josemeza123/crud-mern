import { useTasks } from "../context/TaskProvider";

const TaskCard = ({ task }) => {

const {deleteTask}=useTasks()

  

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.descripcion}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createAt}</span>
      <button onClick={() => deleteTask(task.id)}>delete</button>
      <button>Editar</button>
    </div>
  );
};

export default TaskCard;
