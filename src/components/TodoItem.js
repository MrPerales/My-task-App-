import React from "react";
import '../Style-Components/todoItem.css'

function TodoItem(props){

    //  methods for onCLick 
    const onCompleted= ()=>{
        alert(`Congratulations you completed the task ${props.text}`)
    }
    const onDelete=()=>{
        alert(`You deleted the task ${props.text} :( `)
    }

    return(
        <li>
            <div className="checkAndClose">
                <span
                    className={`Icon icon-check ${props.completed && 'icon-check--active'}` }
                    onClick={onCompleted}
                >
                    ✓
                </span>
                <span
                    className="Icon icon-delate" 
                    onClick={onDelete}
                >
                    X
                </span>
            </div>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--completed'}`}>{props.text}</p>
        </li>
    );
}

export {TodoItem};