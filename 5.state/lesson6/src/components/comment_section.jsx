import React from "react";
function Comment_Section(props) {
    return (
        <>
            <ul>
                {
                    props.comments.map((comment, i) => (
                        <li key={i}>
                            {comment}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Comment_Section;
