import React from "react";
import '../Style-Components/todoItem.css'

function TodoItem(props){

    //  methods for onCLick 
    return(
        <li>
            <div className="checkAndClose">
                <span
                    className={`Icon icon-check ${props.completed && 'icon-check--active'}` }
                    onClick={props.onComplete}
                >
                    ✓
                </span>
                <span
                    className="Icon icon-delate" 
                    onClick={props.onDelete}
                >
                    X
                </span>
            </div>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--completed'}`}>{props.text}</p>
        </li>
    );
}

export {TodoItem};