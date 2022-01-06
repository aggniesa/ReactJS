import React , {useEffect, useState} from 'react';
import ItemDetail from "./ItemDetail";
import data from './data/data';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

const productos = data;

function ItemDetailContainer({}) {

    const [item, setItem] = useState ({});
    const [loading, setLoading] = useState (false);
    const {id} = useParams();
    
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
                let idProd = productos.filter((productos) => productos.id === id)
        
            setItem(idProd)
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
