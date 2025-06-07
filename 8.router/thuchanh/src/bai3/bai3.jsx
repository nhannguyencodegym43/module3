import React from "react";
import {Route, Routes} from "react-router-dom";
import ProductCategory from "./product_category.jsx";
import ProductDetail from "./product_detail.jsx";
function Bai3() {
    const products = [
        {
            id: 1,
            name: "Nguyen"
        },
        {
            id: 2,
            name: "Trung"
        },
        {
            id: 3,
            name: "Nhan"
        }
    ]
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductCategory products={products} />} />
                <Route path="/detail/:id" element={<ProductDetail /> } />
            </Routes>
        </>
    )
}
export default Bai3;