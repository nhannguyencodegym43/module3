import React from "react";
import {Link} from "react-router-dom";
function ProductsList({products}) {
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ProductsList;