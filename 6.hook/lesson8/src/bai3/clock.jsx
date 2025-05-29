import React, {useEffect} from "react";
function Clock() {
    const [clock, setClock] = React.useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setClock(new Date());
            showGreeting();
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [clock])
    const hours = String(clock.getHours()).padStart(2, '0');
    const minutes = String(clock.getMinutes()).padStart(2, '0');
    const seconds = String(clock.getSeconds()).padStart(2, '0');
    function formatTime() {
        return `${hours}:${minutes}:${seconds}`;
    }
    const [greeting, setGreeting] = React.useState('');
    function showGreeting() {
        if (hours < 12) {
            setGreeting('Good morning');
        } else if (hours < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }
    return (
        <>
            {formatTime()} <br/>
            {greeting}
        </>
    )
}
export default Clock;