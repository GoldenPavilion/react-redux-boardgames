import React from 'react';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

const Comments = props => {
    
    return(
        <div className="comments">
            <h3>Comments:</h3>
            <CommentForm />
            { props.game.comments.map(comment => 
                <Comment key={comment.id} comment={comment} />
            )}
        </div>
    )
}

export default Comments;