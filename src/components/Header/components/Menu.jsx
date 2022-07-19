import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import MenuLinks from './MenuLinks';

Menu.propTypes = {};

function Menu(props) {
    return (
        <nav className="header__nav navHeader">
            <div className="searchHeader searchHeader--sp">
                <form className="searchHeader__form">
                    <input type="text" className="form__input form__input--bgGray" placeholder="Search the store" />
                    <button className="searchBtn searchBtn--bgGray">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            </div>
            <MenuLinks />
        </nav>
    );
}

export default Menu;
