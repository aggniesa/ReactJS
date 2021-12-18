import {useState , useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import data from './data/data';

const productos = data;

function ItemListContainer ({greeting, nombreUsuario, apellido}) {

   const [products, setProducts] = useState ([]);

    useEffect(() => {
        const promesa = getItems();
        promesa.then(result => {
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

    
   function onAdd(contador) {
        console.log("Agregaste " + contador + "productos");
   }

    
    return (
        <>  
            <p>¡{greeting}, {nombreUsuario} {apellido}!</p>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
            <ItemList lista={products}/>
        </>
        
    )
}

export default ItemListContainer;
