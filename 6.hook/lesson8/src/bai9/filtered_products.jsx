import React from "react";
function FilteredProducts(props) {
    return (
        <>
            <h2>Filtered Products</h2>
            {
                props.filteredProducts.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))
            }
        </>
    )
}
export default FilteredProducts;