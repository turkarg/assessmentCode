import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
    const handleToggle = () => {
    if (window.confirm("Are you sure you want to update this task?")) {
        toggleComplete(task.id);
    }
    };

    const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
        deleteTask(task.id);
    }
    };
    return (
        <li className="row  justify-between p-2 border-b">
        <span
          className={`cursor-pointer col-md-8 ${task.completed ? "line-through text-gray-500" : ""}`}
        >
          <FontAwesomeIcon icon={task.completed ? faCheckCircle : faCircleExclamation} className={`mr-2 text-blue-500 ${task.completed ? 'alert-success' : 'alert-warning'}`} />
          {task.todo}
        </span>
        {!task.completed ?
            <button onClick={handleToggle}  className="text-blue-500 col-md-3 pull-right" title="Mark Complete" >
                Mark Complete
            </button>
            : <span className="col-md-3"></span>
        }
        <button onClick={handleDelete} className="text-red-500 col-md-1 pull-right">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  };

 export default TodoItem; 