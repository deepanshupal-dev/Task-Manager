import { useState } from "react";
import "./TaskItem.css";

function TaskItem({ task, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleSave = () => {
    if (!title.trim()) return;
    onUpdate(task.id, { title });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />

      {isEditing ? (
        <>
          <div className="task-content">
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="task-actions">
            <button className="btn-small btn-save" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn-small btn-cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="task-content">
            <span className={`task-title ${task.completed ? "done" : ""}`}>
              {task.title}
            </span>
            {task.description && (
              <span className="task-desc">{task.description}</span>
            )}
          </div>
          <div className="task-actions">
            <button
              className="btn-small btn-edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn-small btn-delete"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
