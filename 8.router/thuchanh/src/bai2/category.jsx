import React from "react";
import {useNavigate} from "react-router-dom";
function Category() {
    const products = [
        {
            id: 1,
            name: "Ferrari"
        },
        {
            id: 2,
            name: "Lamborghini"
        },
        {
            id: 3,
            name: "Porches"
        }
    ]
    let navigate = useNavigate();
    function sendDataToProduct(e) {
        navigate(`/product/${e.target.value}`);
    }
    return (
        <>
            <h1>Select a Category</h1>
            <select name="products" onChange={(e) => sendDataToProduct(e)}>
                <option value="">Choose you car</option>
                {products.map((product) => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                ))}
            </select>
        </>
    )
}
export default Category;