import React from "react";
import '../Style-Components/todoItem.css'
import { MdCheckCircleOutline } from 'react-icons/md'
import { RxCrossCircled } from 'react-icons/rx'
import {BiEdit} from 'react-icons/bi'
function TodoItem(props) {

    //  methods for onCLick 
    return (
        <li>
            <div className="checkAndClose">
                <span
                    className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                    onClick={props.onComplete}
                >
                    <MdCheckCircleOutline />
                </span>
                <div className="containerIconEdit-Delete">
                    <span 
                        className="icon icon-edit"
                        onClick={props.onEdit}
                    >
                        <BiEdit/>
                    </span>
                    <span
                        className="icon icon-delate"
                        onClick={props.onDelete}
                    >
                        <RxCrossCircled />
                    </span>

                </div>
            </div>
            <p className={`todoItem-p ${props.completed && 'todoItem-p--completed'}`}>{props.text}</p>
        </li>
    );
}

export { TodoItem };