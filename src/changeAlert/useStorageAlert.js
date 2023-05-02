import React from "react";

function useStorageListener(synchronize) {

    // la funcion tiene un stado donde vamos a saber si hubo cambios en la app y 
    // un actualizador 
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'ToDos_V1') {
            console.log('there were changes');
            setStorageChange(true);
        }
    })
    const toggleShow = () => {
        synchronize();
        setStorageChange(false);
    }
    return{
        show:storageChange,
        toggleShow,
    }
    

}

export { useStorageListener };