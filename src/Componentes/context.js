import { createContext, useContext, useState } from 'react';
import data from './data/data';

export const cartContext = createContext ({total_quantity: 0 , cart: [data]});

export const { Provider } = cartContext

export const useContexto = () => {
    return useContext(cartContext)
}

export const CustomProvider = ({children}) => {

    const [total_quantity, setTotalQuantity] = useState(0);
    const [cart, setCart] = useState([]);

    /*add item to cart*/
    const addItem = (item, quantity) => {
        const id = item.id

        const copy_item = {...item}
        copy_item.quantity = quantity

        setCart([...cart,copy_item])
        if(isInCart(id)){
            const cart_copy = {...cart}
            let match = cart_copy.find((p) => p.id === item.id)
            match.quantity = match.quantity + quantity
            setCart(cart_copy)

        }else {
            const item_quantity = {
                ...item,
                quantity
            }
            setCart([...cart, item_quantity])
        }
        
        setTotalQuantity(total_quantity + quantity)
    }

    /*remove item from cart*/ 
    const removeItem = (id,quantity) => {
        let filteredCart = cart.filter(e => (e.id) !== id)
        setCart(filteredCart)
        setTotalQuantity(total_quantity - quantity)

    }

    /* clear cart*/
    const clearCart = () => { 
        setCart([])
        setTotalQuantity(0)
    }
    /* is in cart*/
    const isInCart = (id) => {
        return cart.find(e => e.item.id === id)
    }


    const contextValue = {
        total_quantity,
        cart,
        addItem,
        removeItem,
        clearCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider;