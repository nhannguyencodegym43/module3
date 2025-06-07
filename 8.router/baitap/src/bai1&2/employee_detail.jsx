import React from "react";
function EmployeeDetail({ employee, setIsShow }) {
    return (
        <>
            <hr/>
            <h2>Employee Detail</h2>
            <p>ID: {employee.id}</p>
            <p>Name: {employee.name}</p>
            <p>Age: {employee.age}</p>
            <button onClick={() => setIsShow(false)}>Back</button>
        </>
    )
}
export default EmployeeDetail;