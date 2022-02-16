import React from 'react';
import SearchForm from './SearchForm';
import AllGames from './AllGames';
import { Outlet } from 'react-router-dom';

const AllGamesContainer = () => {
    return (
        <div className="all-games-container">
            <SearchForm />
            <Outlet />
            <div className="row">
                <AllGames />
            </div>
        </div>
    )
}

export default AllGamesContainer;