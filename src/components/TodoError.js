import React from "react";
import '../Style-Components/todoError.css'
function TodoError(){
    return (
        <div className="ErrorContainer">
            <div className="imgError">
                <img src="https://cdn-icons-png.flaticon.com/512/63/63927.png"></img>
            </div>
            <h2>Oops! Something went wrong</h2>
        </div>
    )
}
export {TodoError};
