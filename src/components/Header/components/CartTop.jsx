import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

CartTop.propTypes = {};

function CartTop(props) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartTotal = cartItems.reduce((prev, cur) => (prev += cur.quantity), 0);
    return (
        <>
            <Link to="/cart" className="cartHeader">
                <FontAwesomeIcon icon={faCartPlus} />
                <p className="cartHeader__ttl">view cart</p>
                {!!cartItems.length && <span className="cartHeader__number">{cartTotal}</span>}
            </Link>
        </>
    );
}

export default CartTop;
