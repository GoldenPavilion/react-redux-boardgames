import React from 'react';
import { updateSearchForm } from '../actions/allGames';
import searchReducer from '../reducers/searchReducer';

const SearchForm = props => {

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
                        placeholder="Search..." 
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchForm;