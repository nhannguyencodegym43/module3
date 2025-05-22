import React from "react";
function Bai30(props) {
    const smallPics = [
        "https://images.unsplash.com/photo-1744894203360-a3f3c56433e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1747645294647-512969fd2d23?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1747201244747-2f337a26e64f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    return (
        <>
            <ul>
                {smallPics.map((item, i) => (
                    <li key={i}>
                        <img src={item} alt="" style={{width: "400px", height: "200px"}} onClick={() => props.showBiggerPics(item)}/>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Bai30;