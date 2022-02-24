import React from 'react';
import GameShelf from './GameShelf';
import UserProfile from './UserProfile';
import { Outlet } from 'react-router-dom';

const ProfileContainer = props => {
    const user = props.user

    return(
        <div className="profile-container">
            <UserProfile key={user.id} user={user} />
            <h4 className="centered-title">Your Games:</h4>
            <div className="row">
                <GameShelf />
            </div>
        </div>
    )
}

export default ProfileContainer;