import React from 'react';
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting, nombreUsuario, apellido}) => {

    let onAdd = (contador) => {
        console.log("Agregaste " + contador + "productos");
    }
    //const {greeting, nombreUsuario, apellido} = props;
    return (
     
        <div>
            <p>¡{greeting}, {nombreUsuario} {apellido}!</p>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
        
    )
}

export default ItemListContainer
