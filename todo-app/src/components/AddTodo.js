import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
    const [task, setTask] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        addTask(task);
        setTask("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4 p-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 mr-2"
          style={{width:"90%"}}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
      </form>
    );
  };

  export default AddTodo;