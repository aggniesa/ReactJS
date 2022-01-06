import ItemCount from "./ItemCount";
import Item from './Item';
import { useParams } from 'react-router-dom';
import data from './data/data';


const ItemDetail = ({item}) => {

    function onAdd(contador) {
        console.log("Agregaste " + contador + "productos");
   }

   // const {id} = useParams ();
   // console.log (id)
    return (
        <div>
            <h1>Detalle de producto</h1>
            <p>Nombre: {item.nombre}</p>
            <p>Detalle: {item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount stock={7} initial={1} onAdd={onAdd}/>
        </div>
    )
};

export default ItemDetail;
