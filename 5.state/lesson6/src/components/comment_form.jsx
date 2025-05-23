import React from "react";
function Comment_Form(props) {
    const [inputValue, setInputValue] = React.useState("");
    function handleSubmit(e) {
        e.preventDefault();
        props.addComment(inputValue);
        setInputValue("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type a comment" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Comment_Form;
