import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import SecTitle from '../../../components/SecTitle';
import ArticleGrid from '../../../components/Article/ArticleGrid';
Blog.propTypes = {};

function Blog({ articles }) {
    return (
        <section className="blog section">
            <div className="container">
                <SecTitle title="LATEST" titleBold="BLOG" isLine />
                <div className="section__content">
                    <ArticleGrid articles={articles} />
                </div>
            </div>
        </section>
    );
}

export default Blog;
