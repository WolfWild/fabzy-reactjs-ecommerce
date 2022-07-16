import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function ArticleCard({ title, image, slug, description }) {
    const navigate = useNavigate();
    const handleNavigateClick = () => {
        navigate(`/blog/${slug}`);
    };
    return (
        <div className="article__card">
            <div className="article__main">
                <figure className="article__img">
                    <img src={image} alt="" />
                    <figcaption>
                        <button onClick={handleNavigateClick}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </figcaption>
                </figure>
                <div className="article__content">
                    <button onClick={handleNavigateClick} className="article__ttl">
                        {title}
                    </button>
                    <p className="article__date">13th Mar 2022</p>
                    <p className="article__txt">{description}</p>
                    <button onClick={handleNavigateClick} className="article__readMore">
                        Read more
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;
