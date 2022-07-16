import React, { useCallback, useEffect, useState } from 'react';
import FormSort from '../../components/Form/FormSort';
import ProductGrid from '../../components/Product/ProductGrid';
import Visual from '../../components/Visual';
import ProductFilter from '../Product/components/ProductFilter';
import productData from '../../assets/data/products';
const sortOptions = {
    newest: (arr) => {
        return arr.sort((a, b) => a.id - b.id);
    },
    bestselling: (arr) => {
        return arr.sort((a, b) => b.rating - a.rating);
    },
    alphaasc: (arr) => {
        return arr.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    },
    alphadesc: (arr) => {
        return arr.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
    },
    priceasc: (arr) => {
        return arr.sort((a, b) => a.price - b.price);
    },
    pricedesc: (arr) => {
        return arr.sort((a, b) => b.price - a.price);
    },
};

const handleSort = (sortOptions, type, arr) => {
    return sortOptions[type](arr);
};

const initFiter = {
    salePrice_gte: 0,
    salePrice_lte: 0,
    tag: [],
    category: [],
    rating: [],
};
function Product(props) {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(initFiter);
    const updateProduct = useCallback(() => {
        let resultProduct = productData;
        if (filter.salePrice_lte > filter.salePrice_gte) {
            resultProduct = resultProduct.filter((item) => {
                const check = filter.salePrice_gte < item.salePrice && item.salePrice < filter.salePrice_lte;
                return check;
            });
        }
        if (filter.tag.length > 0) {
            resultProduct = resultProduct.filter((item) => {
                const check = item.tag.find((item) => filter.tag.includes(item.slug));
                return check !== undefined;
            });
        }
        if (filter.category.length > 0) {
            resultProduct = resultProduct.filter((item) => {
                const check = item.category.find((item) => filter.category.includes(item.slug));
                return check !== undefined;
            });
        }
        if (filter.rating.length > 0) {
            resultProduct = resultProduct.filter((item) => {
                const check = filter.rating.includes(item.rating);
                return check;
            });
        }
        setProducts(resultProduct);
    }, [filter]);
    useEffect(() => {
        const productList = productData;
        setProducts(productList);
    }, []);

    useEffect(() => {
        updateProduct();
    }, [updateProduct]);

    const handleSortChange = (value) => {
        const data = handleSort(sortOptions, value, products);
        setProducts([...data]);
    };

    const handleFilterChange = (values) => {
        setFilter(values);
    };
    return (
        <main className="product-page">
            <Visual title="Product" />
            <div className="section">
                <div className="container">
                    <div className="layout">
                        <aside className="layout__sidebar">
                            <ProductFilter onChange={handleFilterChange} filter={filter} />
                        </aside>
                        <main className="layout__content">
                            <FormSort onSubmit={handleSortChange} />
                            {products.length > 0 ? (
                                <ProductGrid products={products} />
                            ) : (
                                <p className="notice">Product Not Found</p>
                            )}
                        </main>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Product;
