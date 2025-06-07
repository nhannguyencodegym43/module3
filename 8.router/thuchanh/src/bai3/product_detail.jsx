import React from "react";
import {useLocation} from "react-router-dom";
function ProductDetail() {
    const location = useLocation();
    const id = location.state;
    return (
        <>
            <h2>Id selected: {id.id}</h2>
        </>
    )
}
export default ProductDetail;