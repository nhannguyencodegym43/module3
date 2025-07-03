import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = React.useState({
        name: '',
        price: 0,
        description: '',
        imageUrl: '',
    });
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [id])
    function handleChange(e) {
        const { name, value } = e.target;
        setProduct({...product, [name]: name === "price" ? Number(value) : value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({})
            try {
                await axios.patch(`http://localhost:3001/products/${id}`, product);
                navigate("/bai1");
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    const [errors, setErrors] = React.useState([]);

    function handleValidate() {
        const newErrors = {};
        if (!product.name.trim()) newErrors.name = "Product name is required!";
        if (product.price < 0) newErrors.price = "Product price must be a positive number!";
        if (!product.description.trim()) newErrors.description = "Product description is required!";
        if (!product.imageUrl.trim()) newErrors.imageUrl = "Product image URL is required!";
        return newErrors;
    }
    return (
        <>
            <h2>Edit the product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name} onChange={(e) => handleChange(e)} /> <br/>
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>} <br/>
                <input type="number" name="price" value={product.price} onChange={(e) => handleChange(e)}/> <br/>
                {errors.price && <p style={{color: "red"}}>{errors.price}</p>} <br/>
                <input type="text" name="description" value={product.description} onChange={(e) => handleChange(e)} /> <br/>
                {errors.description && <p style={{color: "red"}}>{errors.description}</p>} <br/>
                <input type="text" name="imageUrl" value={product.imageUrl} onChange={(e) => handleChange(e)} /> <br/>
                {errors.imageUrl && <p style={{color: "red"}}>{errors.imageUrl}</p>} <br/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}
export default EditProduct;