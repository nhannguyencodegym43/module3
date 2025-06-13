import {useEffect, useState} from "react";
import Link from "next/link";
import AddProduct from "./add_product";
import {useRouter} from "next/router";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const router = useRouter();
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
        setProducts(Array.isArray(savedProducts) ? savedProducts : []);
    }, [])
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    function handleEdit(id) {
        router.push(`/bai1/edit/${id}`);
    }

    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            const idx = products.findIndex(product => product.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedProducts = [...products];
                updatedProducts.splice(idx, 1);
                setProducts(updatedProducts);
            }
        }
    }

    function handleFilter (e) {
        setSearchItem(e.target.value);
    }

    const displayedProducts = searchItem ? products.filter(product => product.name.toLowerCase().includes(searchItem.toLowerCase())) : products;

    return (
        <>
            {showAdd && (
                <AddProduct setProducts={setProducts} products={products} />
            )}
            <input type="text" placeholder="Type the product you want to find..." name="filtered" value={searchItem} onChange={(e) => handleFilter(e)}/>
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {displayedProducts.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td><Link href={`/bai1/products/${product.id}`}>{product.name}</Link></td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                            <button onClick={() => handleEdit(product.id)}>Edit</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAdd(true)} style={{marginTop: "1rem"}}>Add new product</button>
        </>
    )
}