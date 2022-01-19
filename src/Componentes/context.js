import { createContext, useContext, useState } from 'react';
import data from './data/data';
import {Item} from './Item'

const context = createContext ({total_amount: 0 , cart: [data]});

export const { Provider } = context

export const useContexto = () => {
    return useContext(context)
}

const CustomProvider = ({children}) => {

    const [total_amount, setTotalAmount] = useState({});
    const [cart, setCart] = useState([]);

    const addToCart = (item, amount) => {
        if(isInCart()){
            let productInCart = cart.find(p => p.id === item.id)
            productInCart.amount += amount
            setTotalAmount(total_amount + amount)
            setCart([...cart])

        }else {
            setCart([...cart, {
                item,
                amount
            }])
        }
    }
    const removeFromCart = (id) => {}
    const clearCart = () => { setCart([]) }
    const isInCart = (id) => {
        return cart.find((Item) = Item.id === id)
        //return true ? false
    }

    const contextValue = {
        total_amount,
        cart,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CustomProvider;