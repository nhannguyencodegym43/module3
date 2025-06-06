import React from "react";
import {Route, Routes} from "react-router-dom";
import ProductDetail from "./product_detail.jsx";
import Category from "./category.jsx";

function Bai2() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Category />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </>
    )
}
export default Bai2;
