import React from 'react';
import SearchForm from './SearchForm';
import AllGames from './AllGames';

const AllGamesContainer = () => {
    return (
        <div className="all-games-container">
            <SearchForm />
            <AllGames />
        </div>
    )
}

export default AllGamesContainer;