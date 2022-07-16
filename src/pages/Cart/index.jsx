import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Visual from '../../components/Visual';
Cart.propTypes = {};

function Cart(props) {
    return (
        <main className="cart-page">
            <Visual title="Cart" />
            <div className="section">
                <div className="container">
                    <div className="cartTtl">
                        <h4>Your Cart (1 item)</h4>
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
                                        <tr>
                                            <td className="cartTable__product">
                                                <img
                                                    src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/100x100/products/24/249/4__07794.1518852573.jpg?c=2"
                                                    alt=""
                                                    width="auto"
                                                    height="100"
                                                />
                                            </td>
                                            <td className="cartTable__name">Black Shine Skater</td>
                                            <td className="cartTable__price"> $29.00</td>
                                            <td className="cartTable__quantity">1</td>
                                            <td className="cartTable__action">
                                                <button>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cartTable__product">
                                                <img
                                                    src="https://cdn11.bigcommerce.com/s-12ea9/images/stencil/100x100/products/24/249/4__07794.1518852573.jpg?c=2"
                                                    alt=""
                                                    width="auto"
                                                    height="100"
                                                />
                                            </td>
                                            <td className="cartTable__name">Black Shine Skater</td>
                                            <td className="cartTable__price"> $29.00</td>
                                            <td className="cartTable__quantity">1</td>
                                            <td className="cartTable__action">
                                                <button>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="cartCharge">
                        <ul>
                            <li>
                                <span>Sub Total</span>
                                <span>$10</span>
                            </li>
                            <li>
                                <span>Delivery Fee</span>
                                <span>$5</span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span>$10</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cartCheckout">
                        <button className="btn btn--inline btn--primary">proced to checkout</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;
