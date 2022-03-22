import React from 'react';
import { connect } from 'react-redux';
import { updateCommentForm } from '../actions/commentForm';
import { addComment } from '../actions/commentForm';
import commentFormReducer from '../reducers/commentFormReducer';

const CommentForm = (props) => {

    const handleOnChange = event => {
        const { name, value } = event.target;
        const updatedData = {
            ...commentFormReducer,
            [name]: value
        }
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
                    type="hidden"
                    name="game_id" 
                    value={ props.commentFormReducer.game_id = parseInt(props.game.id) }
                />
                <input 
                    type="hidden"
                    name="user_id" 
                    value={ props.commentFormReducer.user_id = parseInt(props.currentUserReducer.id) }
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