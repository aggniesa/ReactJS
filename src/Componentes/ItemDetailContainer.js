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
    let foundProduct = productos.filter(item => item.id == id)
    useEffect(() => {
        setLoading (true);
        getItems();
        
    }, [])

    const getItems = () => {

        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                setLoading (false);
                let idProd = productos.filter((item) => item.id == id)
                res (idProd[0])
            }, 4000);    
        })
        promesa.then((producto) => setItem(producto) )

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
