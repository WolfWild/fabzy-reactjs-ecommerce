import React from 'react';
import ProductGrid from '../../../components/Product/ProductGrid';
import SecTitle from '../../../components/SecTitle';
NewProduct.propTypes = {};

function NewProduct({ products }) {
    return (
        <section className="newProduct section">
            <div className="container">
                <SecTitle title="NEW" titleBold="ARRIVALS" />
                <div className="section__content">
                    <ProductGrid products={products} />
                </div>
            </div>
        </section>
    );
}

export default NewProduct;
