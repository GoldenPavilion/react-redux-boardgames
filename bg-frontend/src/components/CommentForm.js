import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';
import { addComment } from '../actions/commentForm';

const CommentForm = (props) => {

    const ids = { 
        game_id: parseInt(props.game.id), 
        user_id: parseInt(props.currentUserReducer.id), 
        content: props.commentReducer
    }

    const handleOnChange = event => {
        const comment = event.target.value;
        props.updateCommentForm(comment);
    }

    const handleSubmit = event => {
        console.log(ids);
        event.preventDefault();
        addComment(ids);
    }

    return(
        <div className="comment-form">
            <form>
                <input 
                    className="content-entry" 
                    type="text"
                    value={props.commentReducer} 
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
        commentReducer: state.commentReducer,
        currentUserReducer: state.currentUserReducer
    }
}

export default connect(mapStateToProps, { updateCommentForm, addComment })(CommentForm);