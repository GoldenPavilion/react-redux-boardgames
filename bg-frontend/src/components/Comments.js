import React from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

const Comments = props => {
    
    return(
        <div className="comments">
            <h5>Comments:</h5>
            <CommentForm />
            { props.game.comments.map(comment => 
                <Comment key={comment.id} comment={comment} />
            )}
        </div>
    )
}

export default Comments;