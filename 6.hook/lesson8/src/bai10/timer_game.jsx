import React, {useEffect, useState} from "react";
function TimerGame() {
    const [isStarted, setIsStarted] = useState(false);
    const [counter, setCounter] = React.useState(3);
    const [showClick, setShowClick] = React.useState(false);
    useEffect(() => {
        if (!isStarted || counter === 0) return;
        const number_counter = setInterval(() => {
            setCounter(prev => {
                if (prev === 1) {
                    clearInterval(number_counter);
                    setIsStarted(false);
                    return 0;
                }
                return prev - 1;
            });
            setShowClick(before => {
                if (before) {
                    setShowClick(false);
                }
                return false;
            })
        }, 1000)
        return () => {
            clearInterval(number_counter);
        }
    }, [isStarted, counter]);
    function handleStart() {
        setCounter(3);
        setIsStarted(true);
        setShowClick(true);
    }
    function showCongrats () {
        alert("You won!")
    }
    return (
        <>
            <h1>{counter}</h1>
            {showClick && (
                <button onClick={showCongrats}>Bấm ngay</button>
            )}
            <button onClick={handleStart} disabled={isStarted}>Bắt đầu</button>
        </>
    )
}
export default TimerGame;