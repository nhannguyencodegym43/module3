import React from "react";
import {useParams} from "react-router-dom";
function ProductDetail() {
    const { id } = useParams();
    return (
        <>
            <h2>Id selected {id}</h2>
        </>
    )
}
export default ProductDetail;