import React from "react";
function Bai5(props) {
    return (
        <>
            <h1>Button lists</h1>
            <ul>
                <li>
                    <button value="Iphone" onClick={(event) => {props.handleNotifyProduct(event.currentTarget.value)}}>Iphone</button>
                </li>
                <li>
                    <button value="Ipad" onClick={(event) => {props.handleNotifyProduct(event.currentTarget.value)}}>Ipad</button>
                </li>
                <li>
                    <button value="Imac" onClick={(event) => {props.handleNotifyProduct(event.currentTarget.value)}}>Imac</button>
                </li>
            </ul>
        </>
    )
}
export default Bai5;