import { useState, useEffect } from "react";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="New task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          className="flex-grow p-2 border rounded mr-2"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex space-x-2 mb-4">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500">No tasks to show.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <li
              key={task.id}
              className={`p-2 border rounded flex justify-between items-center ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              <span onClick={() => toggleTask(task.id)} className="cursor-pointer flex-grow">
                {task.text}
              </span>
              <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
