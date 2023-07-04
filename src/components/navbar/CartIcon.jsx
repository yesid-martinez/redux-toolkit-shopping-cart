// Hook que nos da acceso al store
import { useSelector } from "react-redux";

import { HiOutlineShoppingCart } from 'react-icons/hi';

const CartIcon = () => {

    // Obtiene el acceso al store
    const { amount } = useSelector((store) =>store.cart);

    return (
        <div className="amount-container">
            <HiOutlineShoppingCart className="cart-icon"/>
            <span className="badge">{amount}</span>
        </div>
    )
}

export default CartIcon;