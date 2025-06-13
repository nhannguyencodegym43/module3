import {useState} from "react";

export default function AddProduct({setProducts, products}) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const taskId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
        const newProduct = {
            id: taskId + 1,
            name: formData.name,
            description: formData.description,
            price: Number(formData.price),
        }
        setProducts([newProduct, ...products]);
        localStorage.setItem("products", JSON.stringify([newProduct, ...products]));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={formData.name}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" name="description" placeholder="Description" value={formData.description}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="number" name="price" placeholder="Price" value={formData.price}
                       onChange={(e) => handleChange(e)}/> <br/>
                <button type="submit" style={{marginTop: "1rem"}}>Add</button>
            </form>
        </>
    )
}