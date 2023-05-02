import React from "react";
import { withStorageListener } from "./withStorageAlert";
import '../Style-Components/changeAlert.css'


function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="reloadContainer">
                <div>
                    <p className="reloadText"> There were changes!</p>
                    <button
                        className="reloadButton"
                        onClick={() => toggleShow(false)}
                    >
                        Reload information
                    </button>

                </div>
            </div>
        )
    } else {
        return null;
    }

}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)


export { ChangeAlertWithStorageListener };