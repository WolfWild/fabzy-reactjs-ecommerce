import React from 'react';
import CartTop from './CartTop';
import SearchForm from './SearchForm';
import Service from './Service';

Widget.propTypes = {};

function Widget(props) {
    return (
        <div className="header__widget">
            <div className="header__widget--left">
                <Service />
            </div>
            <div className="header__widget--right">
                <CartTop />
                <SearchForm />
            </div>
        </div>
    );
}

export default Widget;
