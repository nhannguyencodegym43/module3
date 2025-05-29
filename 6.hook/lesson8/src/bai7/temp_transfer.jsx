import React, {useEffect} from "react";

function TempTransfer() {
    let res = 0;

    const [degree, setDegree] = React.useState(0);
    const [type, setType] = React.useState("");

    function showResult(e) {
        e.preventDefault();
        alert(`Kết quả là: ${res}`);
        res = 0;
    }
    function handleType(newType) {
        if (newType === "toC") {
            res = (degree - 32) * 5 / 9;
        } else if (newType === "toF") {
            res = (degree * 9 / 5) + 32;
        }
    }
    useEffect(() => {
        handleType(type);
    }, [degree]);
    return (
        <>
            <form onSubmit={showResult}>
                <select name="types" id="types" onChange={(e) => setType(e.target.value)}>
                    <option value={null}>Mời chọn</option>
                    <option value="toC">Transfer to Celsius</option>
                    <option value="toF">Transfer to Fahrenheit</option>
                </select>
                <input type="number" placeholder="Type the degree..." value={degree}
                       onChange={(e) => setDegree(Number(e.target.value))}/>
                <button type="submit">Transfer</button>
            </form>
        </>
    )
}

export default TempTransfer;