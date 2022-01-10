import React from 'react';
import Logout from './Logout';


const UserProfile = props => {
    const user = props.user.attributes
    
    return(
        <div className="card" style={{width: 300}}>
            <div className="card-body">
                { user.game_host ? <h3 className="card-title">{ user.username }(Host)</h3> : <h3>{ user.username }</h3>}        
                <p className="card-text">Location: { user.location} </p>
                <p className="card-text">Contact: { user.email }</p>
                <Logout />
            </div>
        </div>
    )
}

export default UserProfile;