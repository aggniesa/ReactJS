import React from 'react';
import { useContexto } from '../context';

const CartWidget = () => {

    const {total_amount} = useContexto();
    console.log(total_amount)

    return (
        <div className= "cart-widget">
        
        </div>
    );
}

export default CartWidget;