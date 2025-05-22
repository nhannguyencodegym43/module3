import React from "react";
function Product_Items({products, onVote}) {
    return (
        <>
            <ul>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            {product.name}: {product.votes}
                            <button onClick={() => onVote(product.id)}>Vote</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Product_Items;