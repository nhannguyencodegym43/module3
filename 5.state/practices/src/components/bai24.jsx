import React, {useState} from "react";
function Bai24({showContents}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function handleContent(e) {
        e.preventDefault();
        showContents({title, description});
    }
    return (
        <>
            <form onSubmit={handleContent}>
                <input type="text" placeholder="Enter the title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai24;