import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm';

const SearchForm = ({ searchReducer, updateSearchForm }) => {
    const handleOnChange = event => {
        const { name, value } = event.target
        const updatedData = {
            ...searchReducer,
            [name]: value
        }
        console.log(updatedData)
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

const mapStateToProps = state => {
    return {
        searchReducer: state.searchReducer
    }
}

export default connect(mapStateToProps, { updateSearchForm })(SearchForm);