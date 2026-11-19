import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import './Task.css';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("tasks/").then((res) => setTasks(res.data));
  }, []);

  const addTask = async (data) => {
    const res = await api.post("tasks/", data);
    setTasks([res.data, ...tasks]);
  };

  const toggleTask = async (task) => {
    const res = await api.patch(`tasks/${task.id}/`, {
      completed: !task.completed,
    });
    setTasks(tasks.map((t) => (t.id === task.id ? res.data : t)));
  };

  const updateTask = async (id, data) => {
    const res = await api.patch(`tasks/${id}/`, data);
    setTasks(tasks.map((t) => (t.id === id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await api.delete(`tasks/${id}/`);
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h2>My Tasks</h2>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </div>

      <TaskForm onAdd={addTask} />

      {tasks.length === 0 ? (
        <p className="empty">Koi task nahi hai. Ek add karo!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onUpdate={updateTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
