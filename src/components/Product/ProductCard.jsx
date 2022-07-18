import { faEye, faFile, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '../Rating';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../features/modalProduct/modalProductSlice';
function ProductCard({ image, title, rating, price, slug }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigateClick = () => {
        navigate(`/product/${slug}`);
    };
    const handleOpenModalProduct = (slug) => {
        dispatch(openModal({ slug }));
    };
    return (
        <div className="product__card">
            <figure className="product__img">
                <Link to="">
                    <img src={image} alt="" />
                </Link>
                <figcaption className="product__media">
                    <span className="product__media--quickview" onClick={() => handleOpenModalProduct(slug)}>
                        <FontAwesomeIcon icon={faEye} />
                    </span>
                    {/* <span className="product__media--wishlist">
                        <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span className="product__media--compare">
                        <FontAwesomeIcon icon={faFile} />
                    </span> */}
                </figcaption>
            </figure>
            <div className="product__content">
                <Rating star={rating} />
                <h3 className="product__ttl">{title}</h3>
                <p className="product__price">${price}</p>
                <button onClick={handleNavigateClick} className="btn btn-inline btn--primary">
                    View Product
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
