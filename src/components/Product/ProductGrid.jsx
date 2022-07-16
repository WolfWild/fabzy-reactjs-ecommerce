import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
};

function ProductGrid({ products }) {
    return (
        <div className="product__grid">
            {products.map((item, index) => (
                <ProductCard
                    key={item.id}
                    image={item.images[0]}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    slug={item.slug}
                />
            ))}
        </div>
    );
}

export default ProductGrid;
