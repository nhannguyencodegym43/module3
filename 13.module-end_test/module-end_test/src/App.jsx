import './App.css'
import {Route, Routes} from "react-router-dom";
import Products from "./products.jsx";
import ProductDetails from "./product_details.jsx";
import AddProduct from "./add_product.jsx";
import EditProduct from "./edit_product.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/products/add" element={<AddProduct />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products/edit/:id" element={<EditProduct />} />
            </Routes>
        </>
    )
}

export default App