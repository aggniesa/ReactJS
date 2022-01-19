import { useContexto } from './context';
import Item from './Item';

const Cart = ({lista}) => {

    const {cart, removeFromCart, clearCart} = useContexto()
    console.log(cart)

    return (
        <div className="cardContainer">
            {cart.length > 0}
            {lista.map((products)=> {
                return <Item key={products.id} item={products}/>
            })}
        </div>
    )
}

export default Cart
