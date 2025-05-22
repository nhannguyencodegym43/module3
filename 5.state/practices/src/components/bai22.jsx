import React, {useState} from "react";
function Bai22({onAdd}) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    function handleAdd (event) {
        event.preventDefault();
        onAdd({num1: Number(num1), num2: Number(num2)});
    }
    return (
        <>
            <form onSubmit={handleAdd}>
                <input type="number" value={num1} placeholder="number1" onChange={(event) => setNum1(event.target.value)}/>
                <input type="number" value={num2} placeholder="number2" onChange={(event) => setNum2(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai22;