import { useContexto } from './context';
import Item from './Item';

const Cart = ({lista}) => {


    const {cart, removeItem, clearCart} = useContexto()
    console.log(cart)

    return (
        <div className="cardContainer">
            Cart
            {/*cart.length > 0 ? ()}
            {l/*ista.map((products)=> {
                return <Item key={/*products.id} item={products}/>
            })*/}
        </div>
    )
}

export default Cart
