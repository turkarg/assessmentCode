import React from "react";
import TodoItem from '../components/TodoItem';

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    );
  };

export default TodoList;  