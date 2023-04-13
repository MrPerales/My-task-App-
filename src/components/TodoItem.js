import React from "react";
import '../Style-Components/todoItem.css'

function TodoItem(props){
    return(
        <li>
            <div className="checkAndClose">
                <span className={`Icon icon-check ${props.completed && 'icon-check--active'}` }>
                    ✓
                </span>
                <span className="Icon icon-delate" >
                    X
                </span>
            </div>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--completed'}`}>{props.text}</p>
        </li>
    );
}

export {TodoItem};