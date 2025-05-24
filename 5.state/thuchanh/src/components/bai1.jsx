import React from "react";
function Bai1() {
    const [quantity, setQuantity] = React.useState(0);
    function handleQuantityChange(delta) {
        setQuantity(quantity + delta)
    }
    return (
        <>
            <button disabled={quantity === 0} onClick={() => handleQuantityChange(-1)}>Decrease</button>
            <span style={{margin: "0 5px"}}>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>Increase</button>
        </>
    )
}
export default Bai1;