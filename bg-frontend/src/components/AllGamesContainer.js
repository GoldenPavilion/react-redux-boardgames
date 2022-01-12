import React from 'react';
import SearchForm from './SearchForm';
import AllGames from './AllGames';

const AllGamesContainer = () => {
    return (
        <div className="all-games-container">
            <SearchForm />
            <div className="row">
                <AllGames />
            </div>
        </div>
    )
}

export default AllGamesContainer;