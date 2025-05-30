import React, {useEffect} from "react";
import CategoryFilter from "./category_filter.jsx";
import FilteredProducts from "./filtered_products.jsx";
function Products() {
    const products = [
        {
            id: 1,
            name: "T-shirt",
            category: "fashion"
        },
        {
            id: 2,
            name: "Iphone",
            category: "technology"
        },
        {
            id: 3,
            name: "Home cooker",
            category: "home-goods"
        }
    ]
    const [category, setCategory] = React.useState("");
    const [filteredProducts, setFilteredProducts] = React.useState([]);
    useEffect(() => {
        setFilteredProducts(products.filter((product) => product.category === category));
    }, [category]);
    return (
        <>
            <CategoryFilter setCategory={setCategory} />
            <FilteredProducts filteredProducts={filteredProducts} />
        </>
    )
}
export default Products;