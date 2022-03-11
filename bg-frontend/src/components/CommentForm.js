import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';

const CommentForm = ({ commentReducer, updateCommentForm }) => {

    const handleOnChange = event => {
        const comment = event.target.value;
        updateCommentForm(comment)
    }

    const handleSubmit = () => {
        console.log(props)
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

export default connect(mapStateToProps, { updateCommentForm })(CommentForm);