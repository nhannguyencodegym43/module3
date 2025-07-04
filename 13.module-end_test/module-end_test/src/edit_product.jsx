import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = React.useState({
        title: "",
        price: "",
        description: "",
    });
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
    const navigate = useNavigate();
    if (!product) return <p>Đang tải...</p>;
    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({...product, [name]: value});
    }
    const [errors, setErrors] = React.useState({});
    function handleValidate () {
        const newErrors = {};
        if (
            (!product.title.trim()) || (!product.price.trim()) || (!product.description.trim())
        ) {
            let fillMessage = "Hãy điền đầy đủ các ô!";
            newErrors.title = fillMessage;
            newErrors.price = fillMessage;
            newErrors.description = fillMessage;
        }
        if (isNaN(product.price) || Number(product.price) < 0 ) newErrors.price = "Giá không hợp lệ!";
        return newErrors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            try {
                await axios.put(`http://localhost:3000/products/${id}`, product);
                alert("Đã sửa sản phẩm thành công!")
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <h2>Sửa sản phẩm</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control type="text" name="title" value={product.title} onChange={(e) => handleChange(e)} />
                </Form.Group>
                {errors.title && (
                    <p style={{color: "red"}}>{errors.title}</p>
                )}
                <Form.Group className="mb-3">
                    <Form.Label>Giá</Form.Label>
                    <Form.Control type="text" name="price" value={product.price} onChange={(e) => handleChange(e)} />
                </Form.Group>
                {errors.price && (
                    <p style={{color: "red"}}>{errors.price}</p>
                )}
                <Form.Group className="mb-3">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" name="description" value={product.description} onChange={(e) => handleChange(e)} />
                </Form.Group>
                {errors.description && (
                    <p style={{color: "red"}}>{errors.description}</p>
                )}
                <Button variant="primary" type="submit" style={{marginRight: "1rem"}}>
                    Cập nhật
                </Button>
                <Button variant="primary" onClick={() => navigate("/")}>Trở lại</Button>
            </Form>
        </>
    )
}
export default EditProduct;