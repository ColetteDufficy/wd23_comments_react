const Comment = ( {author, children} ) => {
    return ( 
        <>
        <h4>{children}</h4> 
        {/* children is a React property, and refers to the 'child' property of the object */}
        <p>{author}</p>
        </>
     );
};
 
export default Comment;