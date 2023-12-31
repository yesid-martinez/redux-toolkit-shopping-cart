import PropTypes from 'prop-types';

import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import { removeItem, incrementItemAmount, decreaseItemAmount } from '../../features/cart/cartSlice';

const CartItem = ({id, title,price, img, amount}) => {
    
    const dispatch = useDispatch();

    return (
        <article key={id} className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(id))}>
                    Remove
                </button>
            </div>
            <div>
                <button
                    className="amount-btn"
                    onClick={() => dispatch(incrementItemAmount(id))}>
                    <FaChevronUp/>
                </button>
                <p className="amount">{amount}</p>
                <button
                    className="amount-btn"
                    onClick={ () => {
                        if(amount === 1){
                            dispatch(removeItem(id));
                        }else{
                            dispatch(decreaseItemAmount(id));
                        }
                    }}>
                    <FaChevronDown/>
                </button>
            </div>
        </article>
    )
}

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default CartItem