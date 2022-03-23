import React from 'react';

const Comment = props => {
    
    return(
        <div className="comment">
            <p>{ props.comment.attributes.content }</p>
            <p className="comment-user"><i>---{ props.comment.attributes.user.username}</i></p>
        </div>
    )
}

export default Comment;