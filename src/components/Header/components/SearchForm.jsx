import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

SearchForm.propTypes = {};

function SearchForm(props) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const searchInputRef = useRef();
    const handleValueChange = (e) => {
        setValue(e.target.value);
    };
    const handleSearchFormSubmit = (e) => {
        e.preventDefault();
        navigate('/search', { state: { searchValue: value } });
        searchInputRef.current.value = '';
    };
    return (
        <div className="searchHeader">
            <form className="searchHeader__form" onSubmit={handleSearchFormSubmit}>
                <input
                    type="text"
                    className="form__input form__input--bgGray"
                    placeholder="Search the store"
                    onChange={handleValueChange}
                    ref={searchInputRef}
                />
                <button className="searchBtn searchBtn--bgGray">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </div>
    );
}

export default SearchForm;
