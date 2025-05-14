import React from "react";
function Bai13() {
    function showImage(url, alt) {
        return <img src={url} alt={alt} />
    }
    return (
        <>
            {showImage("https://www.google.com", "This is Google")}
        </>
    )
}
export default Bai13;
