import { useState } from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from "../components/CommentList";


const CommentBox = () => {

    const [comments, setComments] = useState(
        [
            {
                id: 1,
                author: 'Rick Henry',
                text: 'React is a such a great library!'
            },
            {
                id: 2,
                author: 'Valerie Gibson',
                text: "I'm dreaming in React..."
            },
        ]
    )

    // prepaid envelope thats being passed down and will be sent back to CommentBox
    const addComment = (submittedComment) => {
        submittedComment.id = Date.now();
        setComments( [...comments, submittedComment] ) //set comments to be an new array, and include the old comments and add the subittedCommnet. ... is called the Spread operator
        //everytime ur introducing with a new array, use this syntax
    }
         

    return (
        <>
        <h2>I'm a CommentBox</h2>
        <CommentList comments={comments} /> {/* the 1st comments is the proprty name, and the 2nd comment is the value */}
        <CommentForm onCommentSubmit={addComment} />
        </>
    );
};

export default CommentBox;