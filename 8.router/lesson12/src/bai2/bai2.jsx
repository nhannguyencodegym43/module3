import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import ProductsList from "./products_list.jsx";
import ProductDetail from "./product_detail.jsx";
function Bai2() {
    const products = [
        {
            id: 1,
            name: "Iphone"
        },
        {
            id: 2,
            name: "Ipad"
        },
        {
            id: 3,
            name: "IMac"
        }
    ]
    return (
        <>
            <h1>Dynamic Route</h1>
            <nav>
                <NavLink to="/product">Product List</NavLink>
            </nav>
            <Routes>
                <Route path="/product" element={<ProductsList products={products} /> } />
                <Route path="/product/:id" element={<ProductDetail products={products} />} />
            </Routes>
        </>
    )
}
export default Bai2;