import React from 'react';
import GameShelf from './GameShelf';
import UserProfile from './UserProfile';

const ProfileContainer = () => {
    debugger
    return(
        <div className="profile-container">
            <UserProfile />
            <GameShelf />
        </div>
    )
}

export default ProfileContainer;