import React from "react";
import '../Style-Components/todoList.css'
function TodoList(props) {
    return (
        <section className="todoListSection">
            {/* if loading = true render <TodoLoading/> */}
            {props.loading && props.onLoading()}
            {/* if error = true render <TodoError/> */}

            {props.Error && props.onError()}
            {/* if loading is false and searchToDos.length=0 render <EmptyTodo/> */}
            {(!props.loading && !props.searchedToDos.length) && props.onEmptyTodo()}

            <ul>
            {/* render list*/}
            {props.searchedToDos.map(props.render)}
            </ul>
        </section>
    );
}

export { TodoList }