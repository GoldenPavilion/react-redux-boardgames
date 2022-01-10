import React from 'react';
import Logout from './Logout';


const UserProfile = props => {
    const user = props.user.attributes
    
    return(
        <div className="card" style={{width: 300}}>
            <div class="card-body">
                { user.game_host ? <h3 class="card-title">{ user.username }(Host)</h3> : <h3>{ user.username }</h3>}        
                <p class="card-text">Location: { user.location} </p>
                <p class="card-text">Contact: { user.email }</p>
                <Logout />
            </div>
        </div>
    )
}

export default UserProfile;