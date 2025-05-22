import React, {useState} from "react";
function Bai23({showFeedbacks}) {
    const [feedback, setFeedback] = useState("");
    function handleFeedbackChange(event) {
        event.preventDefault();
        showFeedbacks(feedback);
    }
    return (
        <>
            <form onSubmit={handleFeedbackChange}>
                <textarea cols="30" rows="10" value={feedback} onChange={(event) => setFeedback(event.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai23;