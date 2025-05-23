import React from "react";
function ProductItems(props) {
    return (
        <>
            <ul>
                {props.products.map((product) => (
                    <li key={product.id}>
                        {product.name}: {product.quantity}
                        <button onClick={() => props.onQuantityAdd(product.id)}>+</button>
                        <button onClick={() => props.onQuantitySubtract(product.id)}>-</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductItems;