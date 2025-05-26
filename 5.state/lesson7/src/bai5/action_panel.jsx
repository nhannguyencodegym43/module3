import React from "react";
function ActionPanel(props) {
    return (
        <>
            <button value="Người dùng đã đăng nhập" onClick={(e) => props.handleLogs(e.currentTarget.value)}>Đăng nhập</button>
            <button value="Người dùng đã xem trang" onClick={(e) => props.handleLogs(e.currentTarget.value)}>Xem trang</button>
            <button value="Người dùng đã đăng xuất" onClick={(e) => props.handleLogs(e.currentTarget.value)}>Đăng xuất</button>
        </>
    )
}
export default ActionPanel;