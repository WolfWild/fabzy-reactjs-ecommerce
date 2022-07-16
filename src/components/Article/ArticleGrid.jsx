import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleGrid({ articles = [] }) {
    return (
        <div className="article__grid">
            {articles.map((item, index) => (
                <ArticleCard
                    key={item.id}
                    image={item.thumb}
                    slug={item.slug}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export default ArticleGrid;
