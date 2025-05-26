import React from "react";
function FilterPanel(props) {
    let style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
    return (
        <>
            <div style={style}>
                <button value="Shirts" onClick={(e) => props.handleFilter(e.currentTarget.value)}>Shirts</button>
                <button value="Pants" onClick={(e) => props.handleFilter(e.currentTarget.value)}>Pants</button>
                <button value="Caps" onClick={(e) => props.handleFilter(e.currentTarget.value)}>Caps</button>
            </div>
        </>
    )
}
export default FilterPanel;