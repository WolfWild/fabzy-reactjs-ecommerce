import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProductViewModal from '../ProductViewModal';

function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
            <ProductViewModal />
        </>
    );
}

export default Layout;
