import React, {useState} from "react";
function TodoForm(props) {
    const [inputValue, setInputValue] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(inputValue);
        setInputValue("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Add</button>
            </form>
        </>
    )
}
export default TodoForm;