
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./todolist.css";
import todoImage from "./todo.png";
import { Link } from "react-router-dom";
import "../src/components/navbar";
// import Card from "react-bootstrap/Card";
// import ChatBot from "react-simple-chatbot";
// import { ThemeProvider } from "styled-components";

const TodoList = () => {
  // State variables
  const [tasks, setTasks] = useState([]); // Holds the list of tasks
  const [inputValue, setInputValue] = useState(""); // Holds the value of the input field
  const [filter, setFilter] = useState("all"); // Holds the current filter type
  const [isLoading, setIsLoading] = useState(true); // Indicates whether the data is being loaded
  const [editTaskId, setEditTaskId] = useState(null); // Holds the ID of the task being edited

  // Fetch initial data
  useEffect(() => {
    fetchTodos();
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Fetch todos from an API
  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=4"
      );
      const todos = await response.json();
      setTasks(todos);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching todos:", error);
      setIsLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add a new task
  const handleAddTask = async () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTask = {
      title: inputValue,
      completed: false,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify(newTask),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const addedTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      setInputValue("");
      toast.success("Task added successfully");
    } catch (error) {
      console.log("Error adding task:", error);
      toast.error("Error adding task");
    }
  };

  // Handle checkbox change for a task
  const handleTaskCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    toast.success("Task deleted successfully");
  };

  // Edit a task
  const handleEditTask = (taskId) => {
    setEditTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setInputValue(taskToEdit.title);
  };

  // Update a task
  const handleUpdateTask = async () => {
    if (inputValue.trim() === "") {
      return;
    }

    const updatedTask = {
      title: inputValue,
      completed: false,
    };

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${editTaskId}`,
        {
          method: "PUT",
          body: JSON.stringify(updatedTask),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const updatedTaskData = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTaskId
            ? { ...task, title: updatedTaskData.title }
            : task
        )
      );
      setInputValue("");
      setEditTaskId(null);
      toast.success("Task updated successfully");
    } catch (error) {
      console.log("Error updating task:", error);
      toast.error("Error updating task");
    }
  };

  // Mark all tasks as completed
  const handleCompleteAll = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({ ...task, completed: true }))
    );
  };

  // Clear completed tasks
  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  // Handle filter change
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "completed") {
      return task.completed;
    } else if (filter === "uncompleted") {
      return !task.completed;
    }
    return true;
  });

  // Display loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the todo list
  return (
    <>
      <nav>
        <div className="bg-gray-800 text-white fixed top-0 left-0 w-full z-60">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-white ">
              Chronicles
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
              <Link to="/journal" className="hover:text-gray-400">
                Journal
              </Link>
              {/* Add more links as needed */}
            </nav>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden absolute top-full right-0 bg-gray-800 w-full py-4 px-5 rounded-b-lg  shadow-sm">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/journal"
                    className="text-white text-lg block hover:text-gray-400"
                  >
                    Journal
                  </Link>
                </li>

                {/* Add more links as needed */}
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="cont">
        <ToastContainer />
        <div className="todo-app">
          <h2>
            <img src={todoImage} alt="todo-image" /> Todo List
          </h2>
          <div className="row">
            <i className="fas fa-list-check"></i>
            <input
              type="text"
              className="add-task"
              id="add"
              placeholder="Add your todo"
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              id="btn"
              onClick={editTaskId ? handleUpdateTask : handleAddTask}
            >
              {editTaskId ? "Update" : "Add"}
            </button>
          </div>

          <div className="mid">
            <i className="fas fa-check-double"></i>
            <p id="complete-all" onClick={handleCompleteAll}>
              Complete all tasks
            </p>
            <p id="clear-all" onClick={handleClearCompleted}>
              Delete comp tasks
            </p>
          </div>

          <ul id="list">
            {filteredTasks.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  data-id={task.id}
                  className="custom-checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskCheckboxChange(task.id)}
                />
                <label htmlFor={`task-${task.id}`}>{task.title}</label>
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                    className="edit"
                    data-id={task.id}
                    onClick={() => handleEditTask(task.id)}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"
                    className="delete"
                    data-id={task.id}
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="filters">
            <div className="dropdown">
              <button className="dropbtn">Filter</button>
              <div className="dropdown-content">
                <a href="#" id="all" onClick={() => handleFilterChange("all")}>
                  All
                </a>
                <a
                  href="#"
                  id="rem"
                  onClick={() => handleFilterChange("uncompleted")}
                >
                  Uncompleted
                </a>
                <a
                  href="#"
                  id="com"
                  onClick={() => handleFilterChange("completed")}
                >
                  Completed
                </a>
              </div>
            </div>

            <div className="completed-task">
              <p>
                Completed:{" "}
                <span id="c-count">
                  {tasks.filter((task) => task.completed).length}
                </span>
              </p>
            </div>
            <div className="remaining-task">
              <p>
                <span id="total-tasks">
                  Total Tasks: <span id="tasks-counter">{tasks.length}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
