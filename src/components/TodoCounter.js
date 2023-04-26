import React from "react";
import '../Style-Components/todoCounter.css'

function TodoCounter({totalTask,completedTask}) {
  return (

    <h2 className="title-task">you've done {completedTask} of {totalTask} the tasks </h2>

  );
};

export { TodoCounter };