import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getProductBySlug } from '../../assets/data/products';
import { addItemToCart } from '../../features/cart/cartSlice';
import { closeModal } from '../../features/modalProduct/modalProductSlice';
import ProductView from '../ProductView';
ProductViewModal.propTypes = {};

const initProduct = {
    id: '',
    title: '',
    slug: '',
    price: '',
    sku: '',
    weight: '',
    shipping: 'Calculated at Checkout',
    images: [
        'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x550/products/17/298/2__25062.1518853539.jpg?c=2',
        'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/230/5__66181.1518852270.jpg?c=2',
        'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/231/4__15396.1518852270.jpg?c=2',
        'https://cdn11.bigcommerce.com/s-12ea9/images/stencil/500x500/products/26/232/2__32586.1518852270.jpg?c=2',
    ],
    category: [],
    tag: [],
    rating: 4,
};
function ProductViewModal(props) {
    const checkModalSlug = useSelector((state) => state.modalProduct.slug);
    const dispatch = useDispatch();
    const [product, setProduct] = useState(initProduct);
    useEffect(() => {
        const productDetail = getProductBySlug(checkModalSlug);
        if (productDetail.length === 0) {
            setProduct(initProduct);
        } else {
            setProduct(productDetail[0]);
        }
    }, [checkModalSlug]);
    const handleAddToCartSubmit = (value) => {
        const action = addItemToCart({
            id: product.id,
            product,
            quantity: value,
        });
        dispatch(action);
        toast.success('Add product successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const handleCloseModalProduct = () => {
        dispatch(closeModal());
    };
    return (
        <div className={!!checkModalSlug ? 'modal is-show' : 'modal'}>
            <div className="modal__main">
                <button className="modal__close" onClick={handleCloseModalProduct}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="modal__content">
                    <ProductView product={product} onSubmit={handleAddToCartSubmit} />
                </div>
            </div>
            <div className="modal__overlay" onClick={handleCloseModalProduct}></div>
        </div>
    );
}

export default ProductViewModal;
