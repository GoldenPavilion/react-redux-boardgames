import React from 'react';
import Logout from './Logout';


const UserProfile = props => {
    const user = props.user.attributes
    console.log(props)
    return(
        <div className="user-profile">
            { user.game_host ? <h3>{ user.username }(Host)</h3> : <h3>{ user.username }</h3>}        
            <p>Location: { user.location} </p>
            <p>Contact: { user.email }</p>
            <Logout />
        </div>
    )
}

export default UserProfile;