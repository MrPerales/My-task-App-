import React from "react";
import '../Style-Components/todoLoading.css'

function TodoLoading(){
    return (
        <div className="loadingContainer">
            <span className="loadingTodo"></span>
            <span className="loadingTodo"></span>
            {/* <p>We're Loading your tasks</p> */}
        </div>
    )

}
export {TodoLoading}