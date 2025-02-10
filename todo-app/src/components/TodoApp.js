import React, { useState, useEffect } from "react";

import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    // const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    const fetchTasks = async () => {
      const storedTasks = await fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .catch(console.log);
      console.log(storedTasks);
      if (storedTasks.todos.length > 0) {
        setTotalTasks(storedTasks.todos.length);
        setTasks(storedTasks.todos);
      }
    }
    fetchTasks();
  }, []);
  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (todo) => {
    setTotalTasks(totalTasks + 1);
    setTasks([...tasks, { id: totalTasks, todo, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="mb-4">To-Do List</h1>
      <AddTodo addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList tasks={filteredTasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoApp;
