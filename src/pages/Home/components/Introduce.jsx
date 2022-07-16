import React from 'react';
import SecTitle from '../../../components/SecTitle';

Introduce.propTypes = {};

function Introduce(props) {
    return (
        <section className="introduce section">
            <div className="container">
                <SecTitle title="WELCOME TO" titleBold="FABZY" isLine />
                <p className="introduce__desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    into electronic typesetting, remaining essentially unchanged. It was popularised.
                </p>
                <div className="introduce__list">
                    <div className="introduce__item">
                        <figure className="introduce__img">
                            <img
                                src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms-01.jpg"
                                alt=""
                            />
                        </figure>
                        <div className="introduce__content">
                            <h3 className="introduce__ttl">
                                <span>Smart</span> SHOES
                            </h3>
                            <p className="introduce__txt">Lorem Ipsum Is Simply Dummy Text Of Printing Typesing</p>
                        </div>
                    </div>
                    <div className="introduce__item">
                        <figure className="introduce__img">
                            <img
                                src="https://tmdemo6.mybigcommerce.com/product_images/uploaded_images/cms-2.jpg"
                                alt=""
                            />
                        </figure>
                        <div className="introduce__content">
                            <h3 className="introduce__ttl">
                                <span>Smart</span> GLASS
                            </h3>
                            <p className="introduce__txt">Lorem Ipsum Is Simply Dummy Text Of Printing Typesing</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduce;
