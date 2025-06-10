import {useRouter} from "next/router";
import Layout from "../layout";
import {useEffect, useState} from "react";

export default function ProductDetail() {
    const router = useRouter();
    const {id} = router.query;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
        const foundProduct = savedProducts.find(product => product.id.toString() === id);
        setProduct(foundProduct);
    }, [id])
    if (!product) return <Layout><p>Product loading or not found.</p></Layout>

    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai1/login")
    }

    return (
        <Layout>
            <h1>{product.name}</h1>
            <p>{product.description} - {product.price}</p>
            <button onClick={handleLogout}>Log out</button>
        </Layout>
    )
}