import React, {useEffect, useState} from 'react';

const promiseEx = () => {
    return new Promise((res,rej) => {
        setTimeout(
            () => res([
            {id: 1, destacado: true, title: 'banana', price: 400},
            {id: 2, destacado: true, title: 'pera', price: 400},
            {id: 3, destacado: true, title: 'manzana', price: 400},
            {id: 4, destacado: true, title: 'frutilla', price: 400},
            {id: 5, destacado: true, title: 'mango', price: 400},
            {id: 6, destacado: true, title: 'durazno', price: 400},
        ]), 3000,
    )
    })
}

const Nuevo = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        promiseEx().then((frutas)=>{
            const filteredData=data.filter((fruta) =>producto.destacado)
                setProductos(filteredData);

        })
        
    }, []);
    return (
        //desde acá a ItemList
        <> 
        {productos.length === 0 ? (
            <h1>Cargando...</h1>
        ) : (
            <>
            <ul>
        {productos.map(producto) => (

            //desde acá a Item
            <li key={producto.id}>
                <h3>{producto.title}</h3>
                <p>${producto.price}</p>
            </li>
            //Hasta acá a Item

        ))}
        </ul>
        <h2>{productos.length}</h2>
        </>
        //Hasta acá a ItemList

        )}
        
        </>
    );
};

export default Nuevo