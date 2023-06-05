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
function LoadingSpinner(){
    return(
        <>
            <div className="loader-container">
                <div className="spinner"></div>
                <h3>Loading...</h3>
            </div>
        
        </>
    )
}
export {TodoLoading,LoadingSpinner}