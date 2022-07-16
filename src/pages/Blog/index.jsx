import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleGrid from '../../components/Article/ArticleGrid';
import Visual from '../../components/Visual';
import blogData from '../../assets/data/blogs';
function Blog(props) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const articleList = blogData;
        setArticles(articleList);
    }, []);
    return (
        <main className="blog-page">
            <Visual title="Blog" />
            <div className="section">
                <div className="container">
                    <ArticleGrid articles={articles} />
                </div>
            </div>
        </main>
    );
}

export default Blog;
