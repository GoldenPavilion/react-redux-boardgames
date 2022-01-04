import React from 'react';


const UserProfile = props => {
    const user = props.user.attributes
    
    return(
        <div className="user-profile">
            <h3>{ user.username }</h3>
            <p>Location: { user.location} </p>
            <p>Contact: { user.email }</p>
        </div>
    )
}

export default UserProfile;