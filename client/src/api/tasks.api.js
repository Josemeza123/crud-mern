import axios from "axios";

//Conectando desde frontend a backend para obtener
export const getTasksRequest = async () =>
  await axios.get("http://localhost:3000/tasks");

//Conectando desde frontend a backend para crear tareas
export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:3000/tasks", task);

//Conectando desde frontend a backend para eliminar tareas
export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:3000/tasks/${id}`);
