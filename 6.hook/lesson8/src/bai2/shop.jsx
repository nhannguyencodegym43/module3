import React, {useEffect} from "react";
import ProductList from "./product_list.jsx";
import Cart from "./cart.jsx";

function Shop() {
    const products = [
        {
            id: 1,
            name: "Iphone",
        },
        {
            id: 2,
            name: "Ipad",
        },
        {
            id: 3,
            name: "IMac",
        }
    ]
    const [cart, setCart] = React.useState([]);
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    function addToCart(newProduct) {
        setSelectedProduct(newProduct);
        setCart(prev => [...prev, newProduct]);
    }
    useEffect(() => {
        if (selectedProduct) {
            console.log(`Adding to cart: ${selectedProduct.name}`);
        }
    },[cart])
    return (
        <>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} />
        </>
    )
}

export default Shop;