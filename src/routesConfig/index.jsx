import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import ArchiveBlog from '../pages/ArchiveBlog';
import ArchiveProduct from '../pages/ArchiveProduct';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Search from '../pages/Search';
import SingleBlog from '../pages/SingleBlog';
import SingleProduct from '../pages/SingleProduct';

RoutesConfig.propTypes = {};

function RoutesConfig(props) {
    return (
        <Routes>
            <Route
                index
                element={
                    <Layout>
                        <Home />
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
            <Route path="/blog">
                <Route
                    index
                    element={
                        <Layout>
                            <ArchiveBlog />
                        </Layout>
                    }
                />
                <Route
                    path=":slug"
                    element={
                        <Layout>
                            <SingleBlog />
                        </Layout>
                    }
                />
            </Route>

            <Route path="product">
                <Route
                    index
                    element={
                        <Layout>
                            <ArchiveProduct />
                        </Layout>
                    }
                />
                <Route
                    path=":slug"
                    element={
                        <Layout>
                            <SingleProduct />
                        </Layout>
                    }
                />
            </Route>

            <Route
                path="*"
                element={
                    <Layout>
                        <NotFound />
                    </Layout>
                }
            />
        </Routes>
    );
}

export default RoutesConfig;
