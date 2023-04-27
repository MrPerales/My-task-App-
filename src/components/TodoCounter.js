import React from "react";
import '../Style-Components/todoCounter.css'

function TodoCounter({totalTask,completedTask,loading}) {
  return (

    <h2 
      className={`title-task ${loading && "title-task--loading" }`}
    >
      you've done {completedTask} of {totalTask} the tasks
    </h2>

  );
};

export { TodoCounter };