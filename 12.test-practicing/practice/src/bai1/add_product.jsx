import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddProduct() {
    const [product, setProduct] = React.useState({
        name: '',
        price: 0,
        description: '',
        imageUrl: ''
    });
    const [products, setProducts] = React.useState([]);
    const navigate = useNavigate();
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    function handleChange(e) {
        const {name, value} = e.target;
        setProduct({...product, [name]: name === "price" ? Number(value) : value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            try {
                const newProduct = {
                    id: (maxId + 1).toString(),
                    ...product
                }
                await axios.post("http://localhost:3001/products", newProduct);
                navigate("/bai1");
            } catch (error) {
                console.log(error);
            }
        }
    }
    const [errors, setErrors] = React.useState({});

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
            <h2>Add new product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name} placeholder="Product Name"
                       onChange={(e) => handleChange(e)}/> <br/>
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>} <br/>
                <input type="number" name="price" value={product.price} placeholder="Product Price"
                       onChange={(e) => handleChange(e)}/> <br/>
                {errors.price && <p style={{color: "red"}}>{errors.price}</p>} <br/>
                <input type="text" name="description" value={product.description} placeholder="Product Description"
                       onChange={(e) => handleChange(e)}/> <br/>
                {errors.description && <p style={{color: "red"}}>{errors.description}</p>}
                <input type="text" name="imageUrl" value={product.imageUrl} placeholder="Product Image Url"
                       onChange={(e) => handleChange(e)}/> <br/>
                {errors.imageUrl && <p style={{color: "red"}}>{errors.imageUrl}</p>}
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AddProduct;