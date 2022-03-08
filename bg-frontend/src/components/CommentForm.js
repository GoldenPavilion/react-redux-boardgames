import React from 'react';

const CommentForm = () => {
    return(
        <div className="comment-form">
            <form>
                <input type="text"></input>
                <input type="submit" value="Add Comment"></input>
            </form>
        </div>
    )
}

export default CommentForm;