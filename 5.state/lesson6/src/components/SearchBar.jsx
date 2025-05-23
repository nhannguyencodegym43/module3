import React from "react";
import InputBox from "./InputBox.jsx";
function SearchBar(props) {
    return (
        <>
            <h1>Search Bar</h1>
            <InputBox search2={props.search} setSearch2={props.setSearch} />
            <ul>
                {props.filterUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </>
    )
}
export default SearchBar;