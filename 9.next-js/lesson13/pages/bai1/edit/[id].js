import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Edit () {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
    });
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if (id !== undefined) {
            const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
            const foundProduct = savedProducts.find((product) => product.id.toString() === id);
            if (foundProduct) setProduct(foundProduct);
        }
    }, [id])
    function handleChange (e) {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }
    function handleSubmit (e) {
        e.preventDefault();
        const products = JSON.parse(localStorage.getItem("products") || "[]");
        const idx = products.findIndex((product) => product.id.toString() === id);
        if (idx !== -1) {
            products[idx] = {...product, price: Number(product.price) };
            localStorage.setItem("products", JSON.stringify(products));
        }
        router.push('/bai1/products');
    }
    if (!product || !product.id) return <p>Product not found...</p>
    return (
        <>
            <h2>Edit the product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" name="description" value={product.description}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="number" name="price" value={product.price}
                       onChange={(e) => handleChange(e)}/> <br/>
                <button type="submit" style={{marginTop: "1rem"}}>Update</button>
            </form>
        </>
    )
}