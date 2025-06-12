import {useState} from "react";
import Link from "next/link";
import AddProduct from "./add_product";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    return (
        <>
            {showAdd && (
                <AddProduct setProducts={setProducts} products={products}/>
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td><Link href={`/bai1/products/${product.id}`}>{product.name}</Link></td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAdd(true)} style={{marginTop: "1rem"}}>Add new product</button>
        </>
    )
}