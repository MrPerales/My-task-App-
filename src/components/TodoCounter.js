import React from "react";
import '../Style-Components/todoCounter.css'

function TodoCounter({total,completed}){
    return(
      
      <h2 className="title-task">you've done {completed} of {total} the tasks </h2>

    );
};

export {TodoCounter};