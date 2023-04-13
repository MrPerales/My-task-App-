import React from "react";
import '../Style-Components/todoList.css'
function TodoList(props){
    return (
        <section className="todoListSection">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}