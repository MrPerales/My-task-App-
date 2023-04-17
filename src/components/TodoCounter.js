import React from "react";
import '../Style-Components/todoCounter.css'
import { ToDoContext } from "../ToDoContext/ToDoContext";

function TodoCounter(){
  const {totalTask,completedTask}=React.useContext(ToDoContext);
    return(
      
      <h2 className="title-task">you've done {completedTask} of {totalTask} the tasks </h2>

    );
};

export {TodoCounter};