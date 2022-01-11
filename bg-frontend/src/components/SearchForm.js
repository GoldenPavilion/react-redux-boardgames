import React from 'react';

const SearchForm = props => {
    return (
        <div className="search">
            <form>
                <div class="form-group">
                    <input type="text" className="form-control" placeholder="Search..." />
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;