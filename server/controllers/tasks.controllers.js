import { pool } from "../db.js";

// lista completa de tareas
export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tasks ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Listar una sola tarea
export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT *FROM tasks WHERE id=?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Creando una tarea
export const createTask = async (req, res) => {
  try {
    const { title, descripcion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, descripcion) VALUES ( ?, ?)",
      [title, descripcion]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      title,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Actualizando una tarea
export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id=?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }  
};

// Eliminando una tarea
export const deleteTask = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id=?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "task not fount" });
  
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }  
};
