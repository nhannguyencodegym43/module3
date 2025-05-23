import React from "react";
function MenuBar(props) {
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
    const [content, setContent] = React.useState("This is the thing to change based on the menu");
    return (
        <>
            <h1>{content}</h1>
            <div style={style}>
                <button onClick={() => setContent("I know life's hard...")}>Button 1</button>
                <button onClick={() => setContent("But the result for winning the game of life is worth it ^^")}>Button 2</button>
                <button onClick={() => setContent("Just remember that.")}>Button 3</button>
                <button onClick={() => setContent("The secret is not to quit!")}>Button 4</button>
                <button onClick={() => setContent("Keep doing and improving <3")}>Button 5</button>
            </div>
        </>
    )
}
export default MenuBar;
