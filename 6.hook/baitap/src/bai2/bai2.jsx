import React, {useEffect} from "react";
function Bai2() {
    const [counter, setCounter] = React.useState(10);
    useEffect(() => {
        if (counter === 0) return;
        const number_counter = setInterval(() => {
            setCounter(prev => {
                if (prev === 1) {
                    clearInterval(number_counter);
                    return 0;
                }
                return prev - 1;
            })
        }, 1000);
        return () => {
            clearInterval(number_counter);
        }
    }, [counter]);
    return (
        <>
            <h1>Count down from {counter}</h1>
        </>
    )
}
export default Bai2;