import React from "react";
function Example(props) {
    return (
        <>
            <h1>List of items</h1>
            <ul>
                {
                    props.ul_list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Example;