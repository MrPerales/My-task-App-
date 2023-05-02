import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        // la funcion tiene un stado donde vamos a saber si hubo cambios en la app y 
        // un actualizador 
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage',(change)=>{
            if(change.key==='ToDos_V1'){
                console.log('there were changes');
                setStorageChange(true);
            }
        })
        const toggleShow=()=>{
            props.synchronize();
            setStorageChange(false);
        }

        return (
            // enviamos los estados al wrappedComponent
            <WrappedComponent
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener };