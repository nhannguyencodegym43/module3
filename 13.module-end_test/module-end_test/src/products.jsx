import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import "./products.css"

function Products() {
    const [products, setProducts] = React.useState([]);
    const [searchItem, setSearchItem] = React.useState("");
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
    if (!products) return <p>Đang tải...</p>;
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            try {
                await axios.delete(`http://localhost:3000/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.error(error);
            }
        }
    }
    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchItem.toLowerCase());
    })
    return (
        <>
            <div className="products-container">
                <h1>Danh sách sản phẩm</h1>
                <Link to="/products/add">
                    <button className="add-btn">Thêm mới</button>
                </Link>
                <input type="text" placeholder="Tìm sản phẩm..." value={searchItem}
                       onChange={(e) => setSearchItem(e.target.value)} className="search-input"/>
                <Table striped bordered hover className="products-table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th colSpan={2}>Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredProducts.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><Link to={`/products/${product.id}`}>{product.title}</Link></td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button onClick={() => handleDelete(product.id)} className="delete-btn">Xóa</button>
                            </td>
                            <td><Link to={`/products/edit/${product.id}`}>
                                <button className="edit-btn">Sửa</button>
                            </Link></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Products;