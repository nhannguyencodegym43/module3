import React from "react";
function Cart_Items({item, onChangeQuantity}) {
    return (
        <>
            <div>
                {item.name} - Giá: {item.price}
                <input type="number" value={item.quantity} onChange={(e) => onChangeQuantity(item.id, parseInt(e.target.value))} />
            </div>
        </>
    )
}
export default Cart_Items;