import React from "react";
import '../Style-Components/todoItem.css'
import {MdCheckCircleOutline} from 'react-icons/md'
import {RxCrossCircled} from 'react-icons/rx'
function TodoItem(props){

    //  methods for onCLick 
    return(
        <li>
            <div className="checkAndClose">
                <span
                    className={`Icon icon-check ${props.completed && 'icon-check--active'}` }
                    onClick={props.onComplete}
                >
                    <MdCheckCircleOutline/>
                </span>
                <span
                    className="Icon icon-delate" 
                    onClick={props.onDelete}
                >
                    <RxCrossCircled/>
                </span>
            </div>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--completed'}`}>{props.text}</p>
        </li>
    );
}

export {TodoItem};