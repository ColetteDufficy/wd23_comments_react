import Comment from "./Comment";

const CommentList = ({comments}) => { // this {comments} property of the object of CommentBox

    const commentNodes = comments.map((comment) => {
        return (
            <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
            // REACT component is in green
            // everything between the opening and closing tags are called children
        )
    })


    return (
        <>
        {commentNodes}
        </>
        // alterntaive return statement cud look like:     return commentNodes;
    );
};


export default CommentList;