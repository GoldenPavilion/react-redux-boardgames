import React from 'react';

const Comment = props => {
    
    return(
        <div className="comment">
            <p>{ props.comment.attributes.content }</p>
            <p>{ props.comment.attributes.user.username}</p>
        </div>
    )
}

export default Comment;