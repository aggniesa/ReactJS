import React , {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import data from './data/data';


//necesito un render inicial (un loader, sacar de clase anterior)
//necesito pedir info. con un useEffect como el de ItemListContainer
const productos = data;
const initialProduct = {nombre: "Retinol B3", id: 1, price: 4500, description:"Serum usado para bleh"};

function ItemDetailContainer({}) {

    const [item, setItem] = useState ({});

    useEffect(() => {
        const promesa = getItems();
        promesa
        .then(result => {
            console.log (result);
            setItem (result);
        })
    }, [])

    const getItems = () => {

        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                res(initialProduct)
            }, 4000);    
        })
        return promesa;
    };



    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer
