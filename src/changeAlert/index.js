import React from "react";
import { useStorageListener } from "./useStorageAlert";
import '../Style-Components/changeAlert.css'


function ChangeAlert({synchronize}) {

   const { show, toggleShow }=useStorageListener(synchronize)


    if (show) {
        return (
            <div className="reloadContainer">
                <div>
                    <p className="reloadText">Something Changed!</p>
                    <button
                        className="reloadButton"
                        onClick={() => toggleShow(false)}
                    >
                        Refresh
                    </button>

                </div>
            </div>
        )
    } else {
        return null;
    }

}




export { ChangeAlert};