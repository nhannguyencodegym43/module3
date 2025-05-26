import React from "react";
function SearchInput(props) {
    return (
        <>
            <input type="text" placeholder="Find your city..." onChange={(e) => props.handleSearch(e.target.value)} />
        </>
    )
}
export default SearchInput;