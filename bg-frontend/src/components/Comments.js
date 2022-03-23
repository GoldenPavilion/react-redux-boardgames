import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment.js';
import CommentForm from './CommentForm.js';

const Comments = props => {
    
    const gameComments = props.commentsReducer.filter(comment => 
        comment.attributes.game.id === parseInt(props.game.id))

    return(
        <div className="comments">
            <h5>Comments:</h5>
            <CommentForm game= { props.game } />
            { props.game.attributes.comments.map(comment => 
                <Comment key={comment.id} comment={comment} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        commentsReducer: state.commentsReducer
    }
}

export default connect(mapStateToProps)(Comments);