import React from "react";
function Bai15() {
    let arr = [
        {
            title: "CEO",
            id: 1
        },
        {
            title: "CTO",
            id: 2
        },
        {
            title: "CPO",
            id: 3
        }
    ]
    return (
        <>
            <ul>
                {
                    arr.map((item, index) => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Bai15;
