import React , {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import data from './data/data';
import ClipLoader from "react-spinners/ClipLoader";

const productos = data;
const initialProduct = {nombre: "Retinol B3", id: 1, price: 4500, description:"Serum usado para bleh"};

function ItemDetailContainer({}) {

    const [item, setItem] = useState ({});
    const [loading, setLoading] = useState (false);

    useEffect(() => {
        setLoading (true);
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
                setLoading (false);
                res(initialProduct)
            }, 4000);    
        })
        return promesa;
    };



    return (
        <div>
            
            {
                loading ? 
                <ClipLoader color={"#2BEFC6"} loading={loading} size={75} />
                :
                <ItemDetail item={item} />
            }
            
        </div>
    );
}

export default ItemDetailContainer
