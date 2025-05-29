import React from "react";
function Cart(props) {
    return (
        <>
            <h2>Cart</h2>
            <ul>
                {props.cart.map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Cart;