import React from "react";
import Product_Items from "./product_items.jsx";
function Products() {
    const [products, setProducts] = React.useState([
        {id: 1, name: "Iphone", votes: 0},
        {id: 2, name: "Xiaomi", votes: 0},
        {id: 3, name: "Vivo", votes: 0},
        {id: 4, name: "Oppo", votes: 0},
        {id: 5, name: "Samsung", votes: 0},
    ]);
    function handleVote (id) {
        setProducts(
            (previous) => previous.map(
                (product) => product.id === id ? {...product, votes:product.votes + 1} : product
            )
        )
    }
    return (
        <>
            <h1>Bình chọn sản phẩm</h1>
            <Product_Items onVote={handleVote} products={products} />
        </>
    )
}
export default Products;