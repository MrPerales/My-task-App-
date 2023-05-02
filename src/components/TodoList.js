import React from "react";
import '../Style-Components/todoList.css'
function TodoList(props) {
    const renderFunction= props.children || props.render

    return (
        <section className="todoListSection">
            {/* if loading = true render <TodoLoading/> */}
            {props.loading && props.onLoading()}
            {/* if error = true render <TodoError/> */}

            {props.Error && props.onError()}
            {/* if loading is false and searchToDos.length  render <EmptyTodo/> */}
            {(!props.loading && !props.totalTask) && props.onEmptyTodo()}
            {/* if totalTask is true and searchedToDos is null  render onEmptySearchResults */}

            {(!!props.totalTask && !props.searchedToDos.length)&& props.onEmptySearchResults()}


            <ul>
            {/* render list //pops.loading because the list is update */}
            {!props.loading && props.searchedToDos.map(renderFunction)}
            </ul>
        </section>
    );
}

export { TodoList }