import React from "react";
function Baitap1(props) {
    const getBgColor = () => {
        switch (props.type) {
            case "success":
                return "green";
                case "warning":
                    return "yellow";
                    case "danger":
                        return "red";
        }
    }
    const style = {
        backgroundColor: getBgColor(),
        color: "white",
    }
    const getMessage = () => {
        switch (props.type) {
            case "success":
                return "Bạn đã truy cập thành công"
                case "warning":
                    return "Coi chừng bị hack"
            case "danger":
                return "Bạn đã bị hack"
        }
    }
    return (
        <>
            <div style={style}>
                {getMessage()}
            </div>
        </>
    )
}
export default Baitap1;