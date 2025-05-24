import React from "react";
function Bai3() {
    const [showComponent, setShowComponent] = React.useState(true);
    function handleShowing () {
        let isDeleting = confirm("Are you sure?");
        if (isDeleting) {
            setShowComponent(false);
        }
    }
    return (
        <>
            {showComponent && <h1>Hello World</h1>}
            <button onClick={() => handleShowing()}>Delete the component</button>
        </>
    )
}
export default Bai3;