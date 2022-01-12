import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/allGames';

const SearchForm = ({ updateSearchForm }) => {

    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedData = {
            ...searchReducer,
            [name]: value
        }
        updateSearchForm(updatedData)
    }

    return (
        <div className="search">
            <form>
                <div class="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={handleOnChange}
                        placeholder="Search..." 
                        value={searchReducer.searchInput}
                    />
                </div>
            </form>
        </div>
    )
}

export default connect(null, { updateSearchForm })(SearchForm);