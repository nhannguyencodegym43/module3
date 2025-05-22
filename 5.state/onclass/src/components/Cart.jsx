import React from "react";
import Cart_Items from "./Cart_Items.jsx";
function Cart() {
    const [items, setItems] = React.useState([
        {
            id: 1,
            name: "áo thun",
            price: 150000,
            quantity: 1,
        },
        {
            id: 2,
            name: "quần bò",
            price: 300000,
            quantity: 1,
        },
        {
            id: 3,
            name: "mũ lưỡi trai",
            price: 90000,
            quantity: 1,
        }
    ])
    function handleChangeQuantity(id, newQuantity) {
        setItems(
            (previous) => previous.map(
                (item) => item.id === id ? {...item, quantity: newQuantity} : item
            )
        )
    }
    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )
    return (
        <>
            <h1>Giỏ hàng</h1>
            {
                items.map((item)=> (
                    <Cart_Items onChangeQuantity={handleChangeQuantity} item={item} />
                ))
            }
            <h1>Tổng tiền là: {totalPrice.toLocaleString()} đ</h1>
        </>
    )
}
export default Cart;