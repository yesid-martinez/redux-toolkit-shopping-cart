import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";

const CartContainer = () => {
    //  Obtiene acceso al store
    const { cartItems } = useSelector( (store) => store.cart);

    return (
        <section className="cart-container">
            <header>Shopping cart</header>
            {!cartItems.length && <CartEmpty/>}
            <div>
                {cartItems.map((item) =>{
                    return <CartItem key={item.id} {... item}/>
                })}
            </div>
        </section>
    )
}

export default CartContainer