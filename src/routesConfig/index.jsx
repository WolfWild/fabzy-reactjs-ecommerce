import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';
import Search from '../pages/Search';

RoutesConfig.propTypes = {};

function RoutesConfig(props) {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/blog"
                element={
                    <Layout>
                        <Blog />
                    </Layout>
                }
            />
            <Route
                path="/blog/:slug"
                element={
                    <Layout>
                        <BlogDetail />
                    </Layout>
                }
            />
            <Route
                path="/register"
                element={
                    <Layout>
                        <Register />
                    </Layout>
                }
            />
            <Route
                path="/login"
                element={
                    <Layout>
                        <Login />
                    </Layout>
                }
            />
            <Route
                path="/product"
                element={
                    <Layout>
                        <Product />
                    </Layout>
                }
            />
            <Route
                path="/product/:slug"
                element={
                    <Layout>
                        <ProductDetail />
                    </Layout>
                }
            />
            <Route
                path="/cart"
                element={
                    <Layout>
                        <Cart />
                    </Layout>
                }
            />
            <Route
                path="/search"
                element={
                    <Layout>
                        <Search />
                    </Layout>
                }
            />
            <Route path="*" element={<Layout>{<NotFound />}</Layout>} />
        </Routes>
    );
}

export default RoutesConfig;
