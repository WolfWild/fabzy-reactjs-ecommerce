import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ProductDetailModal from '../ProductDetailModal';

function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ProductDetailModal />
        </>
    );
}

export default Layout;
