import React from "react";
import '../Style-Components/todoHeader.css'
function TodoHeader() {
    return (
        <nav className="nav">
            <div className="bubble"></div>
            <div>
                <h1 className="navTitle">My task app</h1>
            </div>
            <figure className="figureAvatar">
                <img
                    src="https://openseauserdata.com/files/faba5329af5973c449ab04f5989a78f5.png"
                    className="avatar" >
                </img>
            </figure>
            <div className="welcome">
                <p>Welcome UserName</p>
            </div>

        </nav>
    );
}
export { TodoHeader };