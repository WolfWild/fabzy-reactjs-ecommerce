import { faStar, faEye, faHeart, faFile, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Featured from './components/Featured';
import HeroSlide from './components/HeroSlide';
import Introduce from './components/Introduce';
import NewProduct from './components/NewProduct';
import productData from '../../assets/data/products';
import blogData from '../../assets/data/blogs';
const dataInit = {
    productRating: [],
    productNew: [],
    blogArticles: [],
};
const getNewProduct = (arr) => {
    return arr.slice(0, 8);
};
const getRatingProduct = (arr) => {
    return arr.sort((a, b) => b.rating - a.rating).slice(0, 8);
};
function Home(props) {
    const [data, setData] = useState(dataInit);
    const products = productData;
    const blogs = blogData;
    useEffect(() => {
        const fetchData = async () => {
            const productNew = await getNewProduct(products);
            const productRating = await getRatingProduct(products);
            const blogArticles = blogs.slice(0, 4);
            setData({
                productRating: productRating,
                productNew: productNew,
                blogArticles: blogArticles,
            });
        };
        fetchData();
    }, []);
    return (
        <main className="home-page">
            <HeroSlide />
            <Introduce />
            <Featured products={data.productRating} />
            <Banner />
            <NewProduct products={data.productNew} />
            <Blog articles={data.blogArticles} />
        </main>
    );
}

export default Home;
