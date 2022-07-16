import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

Subscribe.propTypes = {};

function Subscribe(props) {
    return (
        <section className="subscribe section">
            <div className="container">
                <div className="subscribe__main">
                    <div className="section__ttl">
                        <h2>
                            SUBSCRIBE <span>US</span>
                        </h2>
                    </div>
                    <form className="subscribe__form">
                        <input
                            type="text"
                            className="form__input form__input--bgGray"
                            placeholder="Your email address"
                        />
                        <button className="searchBtn searchBtn--bgGray">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
