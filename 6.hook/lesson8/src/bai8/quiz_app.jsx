import React, {useEffect} from "react";
function QuizApp() {
    const questions = [
        {
            id: 1,
            question: "2 + 2 = ?",
            options: ["1", "2", "3", "4"],
            res: "4"
        },
        {
            id: 2,
            question: "2 + 3 = ?",
            options: ["2", "3", "4", "5"],
            res: "5"
        },
        {
            id: 1,
            question: "3 + 3 = ?",
            options: ["6", "5", "4", "3"],
            res: "6"
        },
    ]
    const [currentQuestion, setCurrentQuestion] = React.useState("");
    const [currentOptions, setCurrentOptions] = React.useState([]);
    const [currentRes, setCurrentRes] = React.useState("");
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const chooseQuestion = setInterval(() => {
            setIndex(Math.floor(Math.random() * questions.length));
            setCurrentQuestion(questions[index].question);
            setCurrentOptions(questions[index].options);
            setCurrentRes(questions[index].res);
        }, 3000)
        return () => {
            clearInterval(chooseQuestion);
        }
    });
    let buttonsGroup = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
    }
    function checkAnswer(answer) {
        if (answer === currentRes) {
            alert("Your answer is correct!")
        } else {
            alert("Your answer is wrong!")
        }
    }
    return (
        <>
            <h2>Question</h2>
            {currentQuestion}
            <div style={buttonsGroup}>
                {currentOptions.map((option, i) => (
                    <button key={i} value={option} onClick={(e) => {checkAnswer(e.currentTarget.value)}}>{option}</button>
                ))}
            </div>
        </>
    )
}
export default QuizApp;