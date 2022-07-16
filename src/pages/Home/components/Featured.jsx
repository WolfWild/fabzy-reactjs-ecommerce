import React from 'react';
import ProductGrid from '../../../components/Product/ProductGrid';
import SecTitle from '../../../components/SecTitle';

function Featured({ products }) {
    return (
        <section className="featured section">
            <div className="container">
                <SecTitle title="TOP" titleBold="RATED" />
                <div className="section__content">
                    <ProductGrid products={products} />
                </div>
            </div>
        </section>
    );
}

export default Featured;
