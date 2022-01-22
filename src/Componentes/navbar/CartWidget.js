import React from 'react';
import { useContexto } from '../context';

const CartWidget = () => {

    const {total_quantity} = useContexto();
    console.log(total_quantity)

    return (
        <div className= "cart-widget">
        
        </div>
    );
}

export default CartWidget;