import React from 'react';
import ItemCount from "./ItemCount.js"

const ItemListContainer = (props) => {
    const {nombreUsuario, apellido} = props;
    return (
        <>
        <div>
            {
                <h1 className="greeting">¡Bienvenidx, {nombreUsuario} {apellido}!</h1>
            } 
        </div>
        <ItemCount stock={15} initial={0}/>
        </>
    )
}

export default ItemListContainer
