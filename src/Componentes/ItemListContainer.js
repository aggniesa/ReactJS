import {useState , useEffect} from 'react';
import ItemList from './ItemList';
import data from './data/data';

const productos = data;

function ItemListContainer ({greeting, nombreUsuario, apellido}) {

   const [products, setProducts] = useState ([]);

    useEffect(() => {
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
                res(productos)
            }, 2000);    
        })
        return promesa;
    }

    
    return (
        <>  
            <p>¡{greeting}, {nombreUsuario} {apellido}!</p>
            <ItemList lista={products}/>
        </>
        
    )
}

export default ItemListContainer;
