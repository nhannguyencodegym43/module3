import React, {useEffect} from "react";
function Bai2() {
    const products = [
        {
            id: 1,
            name: "Iphone",
            price: 1000
        },
        {
            id: 2,
            name: "Ipad",
            price: 2000
        },
        {
            id: 3,
            name: "IMac",
            price: 3000
        },
    ]
    const [selectedProduct, setSelectedProduct] = React.useState(null);
    const [discountPrice, setDiscountPrice] = React.useState(null);
    useEffect(() => {
        if (selectedProduct) {
            const timer = setTimeout(() => {
                const discount = Math.random() * 0.3;
                const newPrice = selectedProduct.price * (1 - discount);
                setDiscountPrice(newPrice.toFixed(2));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [selectedProduct]);
    return (
        <>
            <h1>Products list</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id} onClick={() => setSelectedProduct(product)}>
                        {product.name}: ${product.price}
                    </li>
                ))}
            </ul>
            {selectedProduct && (
                <h2>Discount price: ${discountPrice}</h2>
            )}
        </>
    )
}
export default Bai2;