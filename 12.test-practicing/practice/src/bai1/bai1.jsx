import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Bai1() {
    const [products, setProducts] = React.useState([]);
    const [searchItem, setSearchItem] = React.useState("");
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products");
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    let imgStyle = {
        width: "150px",
        height: "100px",
    }
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await axios.delete(`http://localhost:3001/products/${id}`)
                fetchProducts();
            } catch (error) {
                console.error(error);
            }
        }
    }
    const filteredProducts = products.length > 0 ? products.filter((item) => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
    }) : [];
    if (!filteredProducts) return <p>No products found...</p>
    return (
        <>
            <h1>1. Products Management</h1>
            <Link to="/bai1/add"><button>Add new product</button></Link>
            <input type="text" value={searchItem} placeholder="Search..." onChange={(e) => setSearchItem(e.target.value)} />
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td><img src={product.imageUrl} alt={product.name} style={imgStyle}/></td>
                        <td><Link to={`/bai1/${product.id}`}><button>View</button></Link></td>
                        <td><Link to={`/bai1/edit/${product.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(product.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Bai1;