import React from "react";
function Question(props) {
    let buttonsGroup = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    }
    return (
        <>
            <h2>Question</h2>
            {props.currentQuestion}
            <div style={buttonsGroup}>
                {props.currentOptions.map((option, i) => (
                    <button key={i} value={option} onClick={(e) => {props.checkAnswer(e.currentTarget.value)}}>{option}</button>
                ))}
            </div>
        </>
    )
}
export default Question;