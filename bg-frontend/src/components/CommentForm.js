import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';

const CommentForm = ({ commentReducer, updateCommentForm }) => {
    return(
        <div className="comment-form">
            <form>
                <input className="content-entry" type="text"></input>
                <input className="content-button" type="submit" value="Add Comment"></input>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        commentReducer: state.commentReducer
    }
}

export default connect(mapStateToProps)(CommentForm);