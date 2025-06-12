import {useState} from "react";

export default function AddProduct({setProducts, products}) {
    const [product, setProduct] = useState({
        id: Date.now(),
        name: '',
        description: '',
        price: 0,
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setProduct({...product, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        setProducts([product, ...products]);
        localStorage.setItem("products", JSON.stringify([product, ...products]));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={product.name}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" name="description" placeholder="Description" value={product.description}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="number" name="price" placeholder="Price" value={product.price}
                       onChange={(e) => handleChange(e)}/> <br/>
                <button type="submit" style={{marginTop: "1rem"}}>Add</button>
            </form>
        </>
    )
}