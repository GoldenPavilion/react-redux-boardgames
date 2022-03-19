import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';
import { addComment } from '../actions/commentForm';
import commentFormReducer from '../reducers/commentFormReducer';

const CommentForm = (props) => {
    
    const ids = { 
        game_id: parseInt(props.game.id), 
        user_id: parseInt(props.currentUserReducer.id), 
        content: props.commentFormReducer
    }

    const handleOnChange = event => {
        const { name, value } = event.target;
        const updatedData = {
            ...commentFormReducer,
            [name]: value
        }
        debugger
        props.updateCommentForm(updatedData);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(ids);
        props.addComment(ids);
    }

    return(
        <div className="comment-form">
            <form>
                <input 
                    className="content-entry" 
                    type="text"
                    name="content"
                    value={props.commentFormReducer.content} 
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
        commentFormReducer: state.commentFormReducer,
        currentUserReducer: state.currentUserReducer
    }
}

export default connect(mapStateToProps, { updateCommentForm, addComment })(CommentForm);