import React, { useState, useEffect } from "react";
import api from "./api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await api.get("/");
    setTasks(response.data);
  };

  const addTask = async () => {
    if (!newTaskTitle.trim()) return;
    const response = await api.post("/", { title: newTaskTitle });
    setTasks([...tasks, response.data]);
    setNewTaskTitle("");
  };

  const toggleCompletion = async (id, completed) => {
    const response = await api.put(`/${id}`, { completed: !completed });
    setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    await api.delete(`/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const startEditing = (task) => {
    setEditingTaskId(task._id);
    setEditingTaskTitle(task.title);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setEditingTaskTitle("");
  };

  const updateTask = async (id) => {
    if (!editingTaskTitle.trim()) return;
    const response = await api.put(`/${id}`, { title: editingTaskTitle });
    setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    cancelEditing();
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>To-Do List App</h1>
        <p>Stay organized and productive</p>
      </header>

      {/* Main Content */}
      <main className="container mt-4 flex-grow-1">
        <div className="row mb-4">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control mb-2"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Task Title"
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100" onClick={addTask}>
              Add
            </button>
          </div>
        </div>

        <div className="row">
          {/* Active Tasks Section */}
          <div className="col-md-6">
            <h3 className="mb-3">Active Tasks</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.filter((task) => !task.completed).map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>
                      {editingTaskId === task._id ? (
                        <div>
                          <input
                            type="text"
                            className="form-control mb-2"
                            value={editingTaskTitle}
                            onChange={(e) => setEditingTaskTitle(e.target.value)}
                          />
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => updateTask(task._id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={cancelEditing}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => startEditing(task)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() =>
                              toggleCompletion(task._id, task.completed)
                            }
                          >
                            Complete
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTask(task._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Completed Tasks Section */}
          <div className="col-md-6">
            <h3 className="mb-3">Completed Tasks</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.filter((task) => task.completed).map((task) => (
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>
                      {editingTaskId === task._id ? (
                        <div>
                          <input
                            type="text"
                            className="form-control mb-2"
                            value={editingTaskTitle}
                            onChange={(e) => setEditingTaskTitle(e.target.value)}
                          />
                          <button
                            className="btn btn-success btn-sm me-2"
                            onClick={() => updateTask(task._id)}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary btn-sm"
                            onClick={cancelEditing}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => startEditing(task)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() =>
                              toggleCompletion(task._id, task.completed)
                            }
                          >
                            Uncomplete
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTask(task._id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 To-Do List App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TaskList;
