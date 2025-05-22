import React, {useState} from "react";
function Bai19({calculateSquare}) {
    const [num, setNum] = useState(0);
    function handleNum (event) {
        event.preventDefault();
        calculateSquare(num);
    }
    return (
        <>
            <form onSubmit={handleNum}>
            <input type="number" placeholder="Type the number" value={num} onChange={(event) => setNum(Number(event.target.value))}/>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai19;