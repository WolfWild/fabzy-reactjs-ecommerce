import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../assets/data/blogs';
import { getProduct, getTopRatingProduct } from '../../assets/data/products';
import ArticleGrid from '../../components/Article/ArticleGrid';
import ProductGrid from '../../components/Product/ProductGrid';
import SecTitle from '../../components/SecTitle';
import Banner from './components/Banner';
import HeroSlide from './components/HeroSlide';
import Introduce from './components/Introduce';
const dataInit = {
    topRatingProducts: [],
    newProducts: [],
    newBlogs: [],
};

function Home(props) {
    const [data, setData] = useState(dataInit);
    useEffect(() => {
        const fetchData = async () => {
            const newProducts = await getProduct().slice(0, 8);
            const topRatingProducts = await getTopRatingProduct().slice(0, 8);
            const newBlogs = await getBlogs().slice(0, 4);
            setData({
                newProducts: newProducts,
                topRatingProducts: topRatingProducts,
                newBlogs: newBlogs,
            });
        };
        fetchData();
    }, []);
    return (
        <main className="home-page">
            <HeroSlide />
            <Introduce />
            <section className="featured section">
                <div className="container">
                    <SecTitle title="TOP" titleBold="RATED" />
                    <div className="section__content">
                        <ProductGrid products={data.topRatingProducts} />
                    </div>
                </div>
            </section>
            <Banner />
            <section className="newProduct section">
                <div className="container">
                    <SecTitle title="NEW" titleBold="ARRIVALS" />
                    <div className="section__content">
                        <ProductGrid products={data.newProducts} />
                    </div>
                </div>
            </section>
            <section className="blog section">
                <div className="container">
                    <SecTitle title="LATEST" titleBold="BLOG" isLine />
                    <div className="section__content">
                        <ArticleGrid articles={data.newBlogs} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
