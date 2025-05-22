import React from "react";
function SearchBox_Child({handleSearch}) {
    return (
        <>
            <input type="text" placeholder="Type the product" onChange={(event) => handleSearch(event.target.value)}/>
        </>
    )
}
export default SearchBox_Child;