import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';
import { addComment } from '../actions/commentForm';

const CommentForm = ({ commentReducer, updateCommentForm, addComment }) => {
    
    const handleOnChange = event => {
        const comment = event.target.value;
        updateCommentForm(comment)
    }

    const handleSubmit = () => {
        console.log(this.props)
        // grab ids?
    }

    return(
        <div className="comment-form">
            <form>
                <input 
                    className="content-entry" 
                    type="text"
                    value={commentReducer.content} 
                    onChange={handleOnChange} 
                />
                <input 
                    className="content-button" 
                    type="submit" 
                    value="Add Comment"
                    onClick={handleSubmit} 
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        commentReducer: state.commentReducer
    }
}

export default connect(mapStateToProps, { updateCommentForm, addComment })(CommentForm);