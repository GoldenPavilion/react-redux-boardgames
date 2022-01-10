import React from 'react';
import GameShelf from './GameShelf';
import UserProfile from './UserProfile';

const ProfileContainer = props => {
    const user = props.user

    return(
        <div className="profile-container">
            <UserProfile key={user.id} user={user} />
            <div className="row">
                <GameShelf />
            </div>
        </div>
    )
}

export default ProfileContainer;