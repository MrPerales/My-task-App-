import React from "react";
import '../Style-Components/emptyTodo.css'
function EmptyTodo(){
    return(
        <div className="emptyContainer">
            <div>
                
                <h2 className="EmptyText">Create your first task</h2>

            </div>
        </div>
    )
}
export {EmptyTodo}