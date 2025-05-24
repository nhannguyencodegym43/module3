import React, {useState} from "react";
import ProductItems from "./product_items.jsx";
function Products() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Phone",
            quantity: 1,
        },
        {
            id: 2,
            name: "Laptop",
            quantity: 2,
        },
        {
            id: 3,
            name: "Bag",
            quantity: 3,
        }
    ])
    function handleQuantity(id, delta) {
        setProducts(
            (previous) => previous.map(
                (product) => product.id === id ? {...product, quantity:product.quantity + delta} : product
            )
        )
    }
    return (
        <>
            <h1>Quản lý sản phẩm</h1>
            <ProductItems onQuantity={handleQuantity} products={products} />
        </>
    )
}
export default Products;