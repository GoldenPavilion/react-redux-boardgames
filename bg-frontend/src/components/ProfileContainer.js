import React from 'react';
import GameShelf from './GameShelf';
import UserProfile from './UserProfile';

const ProfileContainer = props => {
    const user = props.user

    return(
        <div className="profile-container">
            <UserProfile key={user.id} user={user} />
            <GameShelf />
        </div>
    )
}

export default ProfileContainer;