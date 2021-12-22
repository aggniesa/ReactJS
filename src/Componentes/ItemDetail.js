import ItemCount from "./ItemCount";
import Item from './Item';


const ItemDetail = ({item}) => {

    function onAdd(contador) {
        console.log("Agregaste " + contador + "productos");
   }
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
