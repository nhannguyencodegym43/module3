import React from "react";
function ProductList(props) {
    return (
        <>
            <ul>
                {props.products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => props.addToCart(product)}>Thêm vào giỏ</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductList;