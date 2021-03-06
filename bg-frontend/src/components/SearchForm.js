import React from 'react';
import { connect } from 'react-redux';
import { updateSearchForm } from '../actions/searchForm';

const SearchForm = ({ searchReducer, updateSearchForm }) => {
    const handleOnChange = event => {
        event.preventDefault()
        const value = event.target.value
        const updatedData = {
            ...searchReducer, 
            value
        }
        updateSearchForm(updatedData)
    }

    return (
        <div className="search">
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        onChange={handleOnChange}
                        placeholder="Search..." 
                        value={searchReducer.value}
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