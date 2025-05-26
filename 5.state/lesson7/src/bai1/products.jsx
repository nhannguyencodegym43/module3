import React from "react";
import ProductList from "./product_list.jsx";
import FilterPanel from "./filter_panel.jsx";
function Products() {
    const [products, setProducts] = React.useState([
        {
            name: "Blue t-shirt",
            category: "Shirts",
        },
        {
            name: "Blue jean",
            category: "Pants",
        },
        {
            name: "Snapback",
            category: "Caps",
        }
    ]);
    const [filteredArr, setFilteredArr] = React.useState( []);
    function handleFilter(filter) {
        const filteredProduct = products.filter((product) => {
            return product.category === filter;
        })
        setFilteredArr(filteredProduct);
    }
    return (
        <>
            <h1>Products list</h1>
            <h2>Categories</h2>
            <FilterPanel handleFilter={handleFilter}/>
            <ProductList products={products} />
            <h2>Filtered Category</h2>
            <ul>
                {filteredArr.map((product, index) => (
                    <li key={index}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Products;