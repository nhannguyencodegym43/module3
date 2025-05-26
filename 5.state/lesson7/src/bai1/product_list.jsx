import React from "react";
function ProductList(props) {
    return (
        <>
            <ul>
                {
                    props.products.map((product, index) => (
                        <li key={index}>
                            {product.name}: {product.category}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default ProductList;