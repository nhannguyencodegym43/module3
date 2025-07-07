import React, {useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./add.css"

function AddProduct() {
    const [product, setProduct] = React.useState({
        title: "",
        price: "",
        description: "",
    });
    const [products, setProducts] = React.useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    const navigate = useNavigate();
    if (!products) return <p>Loading...</p>;

    function handleChange(e) {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    const [errors, setErrors] = React.useState({});

    function handleValidate() {
        const newErrors = {};
        let fillMessage = "Hãy điền đầy đủ các ô!";
        if (!product.title.trim()) newErrors.title = fillMessage;
        if (!product.price.trim()) newErrors.price = fillMessage;
        if (!product.description.trim()) newErrors.description = fillMessage;
        if (isNaN(product.price) || Number(product.price) < 0) newErrors.price = "Giá không hợp lệ!";
        return newErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
            try {
                const newProduct = {
                    id: maxId + 1,
                    ...product,
                }
                await axios.post("http://localhost:3000/products", newProduct);
                alert("Đã thêm sản phẩm thành công!")
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <h2>Thêm sản phẩm mới</h2>
            <Form onSubmit={handleSubmit} className="add-product">
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Tên sản phẩm</Form.Label>
                    <Form.Control type="text" name="title" value={product.title} onChange={(e) => handleChange(e)}/>
                </Form.Group>
                {errors.title && (
                    <p style={{color: "red"}}>{errors.title}</p>
                )}
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Giá</Form.Label>
                    <Form.Control type="text" name="price" value={product.price} onChange={(e) => handleChange(e)}/>
                </Form.Group>
                {errors.price && (
                    <p style={{color: "red"}}>{errors.price}</p>
                )}
                <Form.Group className="mb-3">
                    <Form.Label className="form-label">Mô tả</Form.Label>
                    <Form.Control as="textarea" name="description" value={product.description}
                                  onChange={(e) => handleChange(e)}/>
                </Form.Group>
                {errors.description && (
                    <p style={{color: "red"}}>{errors.description}</p>
                )}
                <Button variant="primary" type="submit" style={{marginRight: "1rem"}}>
                    Thêm
                </Button>
                <Button variant="primary" onClick={() => navigate("/")}>Trở lại</Button>
            </Form>
        </>
    )
}

export default AddProduct;