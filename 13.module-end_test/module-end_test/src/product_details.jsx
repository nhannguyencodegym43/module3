import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./details.css"

function ProductDetails() {
    const {id} = useParams();
    const [product, setProduct] = React.useState(null);
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [id])
    if (!product) return <p>Đang tải...</p>;
    return (
        <>
            <h2>Chi tiết sản phẩm</h2>
            <Card className="product-card">
                <Card.Body>
                    <Card.Title>Tên sản phẩm: {product.title}</Card.Title>
                    <Card.Text>
                        Mô tả: {product.description} <br/>
                        Giá: {product.price}
                    </Card.Text>
                    <Link to="/"><Button variant="primary">Trở lại</Button></Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductDetails;