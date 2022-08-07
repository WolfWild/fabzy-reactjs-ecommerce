import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../assets/data/blogs';
import ArticleGrid from '../../components/Article/ArticleGrid';
import Visual from '../../components/Visual';
function Blog(props) {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const newBlogs = getBlogs();
        setArticles(newBlogs);
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
