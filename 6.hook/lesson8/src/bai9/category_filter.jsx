import React from "react";
function CategoryFilter(props) {
    return (
        <>
            <select name="categoryFilter" id="categoryFilter" onChange={(e) => props.setCategory(e.target.value)}>
                <option value={null}>Mời chọn danh mục</option>
                <option value="fashion">Fashion</option>
                <option value="technology">Technology</option>
                <option value="home-goods">Home's Goods</option>
            </select>
        </>
    )
}
export default CategoryFilter;