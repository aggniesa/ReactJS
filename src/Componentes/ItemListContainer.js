import {useState , useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const initialProducts = [
{id: 1, nombre: "Retinol B3", precio: 4500},
{id: 2, nombre: "Hyalu B5", precio: 3200},
{id: 3, nombre: "Pure Vitamin C10", precio: 4800},
{id: 4, nombre: "Buffet + Copper", precio: 5100},
{id: 5, nombre: "Alpha Arbutin + HA", precio: 5300},
{id: 6, nombre: "Glycolic Acid", precio: 5600}
]

function ItemListContainer ({greeting, nombreUsuario, apellido}) {

   const [products, setProducts] = useState ([]);

    useEffect(() => {
        const promesa = getItems();
    }, [products])

    const getItems = () => {

        const promesa = new Promise ((res,rej) => {
            setTimeout(() => {
                res(initialProducts)
            }, 2000);    
        })
    
        promesa
        .then((products) => {
            console.log(products);
            setProducts([...products])
        })
    }

    
   function onAdd(contador) {
        console.log("Agregaste " + contador + "productos");
   }

    
    return (
        <>  
            <p>¡{greeting}, {nombreUsuario} {apellido}!</p>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
            <ItemList products={products}/>
        </>
        
    )
}

export default ItemListContainer;
