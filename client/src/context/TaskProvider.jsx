import { createContext, useContext, useState } from "react";
import { deleteTaskRequest, getTasksRequest } from "../api/tasks.api";
import { TaskContext } from "./TaskContext";



export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks  must be used");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
