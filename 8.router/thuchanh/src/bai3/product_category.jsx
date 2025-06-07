import React from "react";
import {useNavigate} from "react-router-dom";
function ProductCategory({ products }) {
    const navigate = useNavigate();
    function handleNavigate(e) {
        navigate(`/detail/${e.target.value}`, {state: {id: e.target.value}});
    }
    return (
        <>
            <h1>Select a Category</h1>
            <select name="products" onChange={(e) => handleNavigate(e)}>
                <option value="">Choose your product</option>
                {
                    products.map((product) => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                    ))
                }
            </select>
        </>
    )
}
export default ProductCategory;