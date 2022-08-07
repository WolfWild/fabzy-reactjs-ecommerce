import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogBySlug } from '../../assets/data/blogs';
import Visual from '../../components/Visual';

function BlogDetail(props) {
    const { slug } = useParams();
    const [article, setArticle] = useState({});
    useEffect(() => {
        const articleDetail = getBlogBySlug(slug);
        setArticle(articleDetail[0]);
    }, []);
    return (
        <main className="blogDetail-page">
            <Visual title={article.title} />
            <div className="section">
                <div className="container">
                    {article.thumb && (
                        <figure className="blogDetail__thumb">
                            <img src={article.thumb} alt="" />
                        </figure>
                    )}
                    {article.title && <h2 className="blogDetail__heading">{article.title}</h2>}
                    <span className="blogDetail__public">Posted by admin on 13th Mar 2018</span>
                    {article.description && <p className="blogDetail__content">{article.description}</p>}
                </div>
            </div>
        </main>
    );
}

export default BlogDetail;
