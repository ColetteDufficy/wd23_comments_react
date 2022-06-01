import React, { useState } from "react";


const CommentForm = ( {onCommentSubmit} ) => {   // the curly vraces name needs to match what ever i called in on the return statement inthe CommentBox

    const [author, setAuthor] = useState(""); // make the default state of the author to empty
    const [text, setText] = useState(""); // make the default state of the text to empty

    const handleAuthorChange = (event) => {  // this is a function
        // we have control
        // we can have a search filter 
        setAuthor(event.target.value);
    }
    
    const handleTextChange = (event) => {  // this is a function
        setText(event.target.value);
    }

    const handleFormSubmit = (event) => {
        // prevent to delfaut reloading of the page. good code to include
        event.preventDefault();
        // removing the white sapce from start and end of a string:
        const commentAuthor = author.trim()
        const commentText = text.trim()
        // need to check that the space isnt empty
        // if the text is falsey OR the author is falsey, then the return call will exit from the function
        if(!commentAuthor || !commentText){
            return
        }

        // here be code to handle the commmnt in the commentBox. This is the prepaid envelope thats going back to CommentBox line 24 - - thats not right!!!!!!
        onCommentSubmit({
            author: commentAuthor,
            text: commentText
        })

        setAuthor("")
        setText("")
    }

 
    return(
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            placeholder="Type your name here" 
            value={author} 
            onChange={handleAuthorChange} // onChnage is a keyword
            /> 
            {/* author state is being handled here */}
            <input 
            type="text" 
            placeholder="Say something..." 
            value={text} 
            onChange={handleTextChange}
            /> 
            {/* text state is being handled here */ }
            <input 
            type="submit" 
            value="Post!" 
            />
        </form>
        )
}

export default CommentForm;