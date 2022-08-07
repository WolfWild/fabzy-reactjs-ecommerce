import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Visual from '../../components/Visual';
import { removeItemFromCart, updateItemOnCart } from '../../features/cart/cartSlice';
import FormAddToCart from './components/FormAddToCart';
Cart.propTypes = {};

function Cart(props) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = cartItems.reduce((pre, cur) => pre + cur.product.price * cur.quantity, 0);
    const dispatch = useDispatch();
    const handleRemoveItem = (id) => {
        const action = removeItemFromCart({
            id,
        });
        dispatch(action);
        toast.error('Remove product successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const handleQuantityUpdate = (values) => {
        dispatch(updateItemOnCart(values));
        toast.success('Updated product successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    return (
        <main className="cart-page">
            <Visual title="Cart" />
            <div className="section">
                <div className="container">
                    {cartItems.length > 0 ? (
                        <>
                            <div className="cartTtl">
                                <h4>Your Cart ({cartItems.length == 1 ? `${cartItems.length} item` : `${cartItems.length}  items`})</h4>
                            </div>
                            <div className="cartScroll">
                                <div className="cartTable">
                                    <div className="cartTable__scroll">
                                        <table className="cartTable__list">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {!!cartItems.length &&
                                                    cartItems.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="cartTable__product">
                                                                <img src={item.product.images[0]} alt={item.product.title} width="100" height="auto" />
                                                            </td>
                                                            <td className="cartTable__name">{item.product.title}</td>
                                                            <td className="cartTable__price"> ${item.product.price}</td>
                                                            <td className="cartTable__quantity">
                                                                <FormAddToCart onChange={handleQuantityUpdate} productId={item.id} initQuantity={item.quantity} />
                                                            </td>
                                                            <td className="cartTable__action">
                                                                <button onClick={() => handleRemoveItem(item.id)}>
                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="cartCharge">
                                <ul>
                                    <li>
                                        <span>Sub Total</span>
                                        <span>${totalPrice}</span>
                                    </li>
                                    <li>
                                        <span>Delivery Fee</span>
                                        <span>$5</span>
                                    </li>
                                    <li>
                                        <span>Total</span>
                                        <span>${totalPrice + 5}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="cartCheckout">
                                <button className="btn btn--inline btn--primary">process to checkout</button>
                            </div>
                        </>
                    ) : (
                        <p className="notice">There are no items in the cart.</p>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Cart;
