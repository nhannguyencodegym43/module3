import React from "react";
import ActionPanel from "./action_panel.jsx";
import LogViewer from "./log_viewer.jsx";
function Action() {
    const [logs, setLogs] = React.useState([]);
    function handleLogs(action) {
        setLogs((prev) => [...prev, action]);
    }
    return (
        <>
            <h1>User's activities log</h1>
            <ActionPanel handleLogs={handleLogs}/>
            <LogViewer logs={logs} />
        </>
    )
}
export default Action;