import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';

const CommentForm = () => {
    return(
        <div className="comment-form">
            <form>
                <input className="content-entry" type="text"></input>
                <input className="content-button" type="submit" value="Add Comment"></input>
            </form>
        </div>
    )
}

export default CommentForm;