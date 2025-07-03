import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function ProductDetail() {
    let imgStyle = {
        width: "150px",
        height: "100px",
    }
    const {id} = useParams();
    const [product, setProduct] = React.useState(null);
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [id])
    if (!product) {
        return <p>Product not found...</p>
    }
    return (
        <>
            <h2>Product Detail</h2>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div><img src={product.imageUrl} alt={product.name} style={imgStyle}/></div>
        </>
    )
}
export default ProductDetail;