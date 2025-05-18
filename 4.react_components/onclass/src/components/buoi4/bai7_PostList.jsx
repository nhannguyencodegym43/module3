import React from "react";
import Bai7_PostItem from "./bai7_PostItem.jsx";
function Bai7_PostList() {
    const arr = [
        {
            title: "Title 1",
            date: "16/05/2025",
            excerpt: "ABC"
        },
        {
            title: "Title 2",
            date: "17/05/2025",
            excerpt: "XYZ"
        },
        {
            title: "Title 3",
            date: "18/05/2025",
            excerpt: "AYZ"
        }
    ]
    return (
        <>
            <ul>
                {
                    arr.map((item, index) => (
                        <li key={index}>
                            <Bai7_PostItem title={item.title} date={item.date} excerpt={item.excerpt} />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Bai7_PostList;