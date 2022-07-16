import React, { useEffect, useState } from 'react';
import FormSort from '../../components/Form/FormSort';
import ProductGrid from '../../components/Product/ProductGrid';
import Visual from '../../components/Visual';
import ProductFilter from '../Product/components/ProductFilter';
import productData from '../../assets/data/products';
import { useLocation } from 'react-router-dom';
Search.propTypes = {};

function Search(props) {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    console.log(location);
    const updateProduct = () => {
        let resultProduct = productData;
        resultProduct = resultProduct.filter((item) =>
            item.title.toLowerCase().includes(location.state.searchValue.toLowerCase()),
        );
        setProducts(resultProduct);
    };
    useEffect(() => {
        updateProduct();
    }, [location]);
    return (
        <main className="search-page">
            <Visual title="Search" />
            <div className="section">
                <div className="container">
                    {products.length > 0 ? (
                        <>
                            <p className="notice">
                                {products.length} RESULTS FOR '{location.state.searchValue}'
                            </p>
                            <ProductGrid products={products} />
                        </>
                    ) : (
                        <p className="notice">0 RESULTS FOR '{location.state.searchValue}'</p>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Search;
