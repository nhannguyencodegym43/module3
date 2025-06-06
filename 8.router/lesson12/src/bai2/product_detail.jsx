import React from "react";
import {useParams} from "react-router-dom";
function ProductDetail({ products }) {
    const {id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    return (
        <>
            <h2>Product Detail</h2>
            <p>Product ID: {id}</p>
            <p>Product Name: {product.name}</p>
        </>
    )
}
export default ProductDetail;