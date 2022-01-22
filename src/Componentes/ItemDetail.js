import ItemCount from "./ItemCount";
import { useParams } from 'react-router-dom';
import { useContexto } from './context';

const ItemDetail = ({item}) => {

    const { addToCart } = useContexto()


    function onAdd(quantity) {
        console.log("Agregaste " + quantity + " productos");
        //setTotalQuantity(quantity)
        addToCart(item, quantity)
   }

    const {id} = useParams ();
    console.log (id)

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
