import React from "react";
function ProductItems(props) {
    return (
        <>
            <ul>
                {props.products.map((product) => (
                    <li key={product.id}>
                        {product.name}: {product.quantity}
                        <button onClick={() => props.onQuantity(product.id, 1)}>+</button>
                        <button onClick={() => props.onQuantity(product.id, -1)} disabled={product.quantity === 0}>-</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductItems;