import React from 'react';

const Comment = props => {
    debugger
    return(
        <div className="comment">
            <p>{ props.comment.attributes.content }</p>
        </div>
    )
}

export default Comment;