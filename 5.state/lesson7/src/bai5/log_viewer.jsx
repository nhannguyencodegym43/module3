import React from "react";
function LogViewer(props) {
    return (
        <>
            <ul>
                {
                    props.logs.map((log, i) => (
                        <li key={i}>
                            {log}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default LogViewer;