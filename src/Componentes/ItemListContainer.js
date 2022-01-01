import {useState , useEffect} from 'react';
import ItemList from './ItemList';
import data from './data/data';
import ClipLoader from "react-spinners/ClipLoader";

const productos = data;

function ItemListContainer ({greeting, nombreUsuario, apellido}) {

   const [products, setProducts] = useState ([]);
   const [loading, setLoading] = useState (false);

    useEffect(() => {
        setLoading (true);
        const promesa = getItems();
        promesa
        .then(result => {
            console.log (result);
            setProducts (result);
        })
    }, [])

    const getItems = () => {
        
        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                setLoading (false);
                res(productos)
            }, 2000);    
        })
        return promesa;
    }

    
    return (
        
        <div>
            <p>¡{greeting}, {nombreUsuario} {apellido}!</p>
            {
                loading ? 
                <ClipLoader color={"#2BEFC6"} loading={loading} size={75} />
                :
                <ItemList lista={products}/>
            }
            

        </div>
        
        
    )
}

export default ItemListContainer;
