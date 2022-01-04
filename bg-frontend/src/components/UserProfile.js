import React from 'react';
import { connect } from 'react-redux';

const UserProfile = props => {
    return(
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(UserProfile);