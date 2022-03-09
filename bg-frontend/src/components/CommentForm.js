import React from 'react';

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