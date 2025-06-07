import React from "react";
import EmployeeDetail from "./employee_detail.jsx";
function Employee() {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
    const [isShow, setIsShow] = React.useState(false);
    const [employee, setEmployee] = React.useState({});
    function showDetails(employee) {
        setIsShow(true);
        setEmployee(employee);
    }
    return (
        <>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>ID: {employee.id}</td>
                        <td>Name: {employee.name}</td>
                        <td><button onClick={() => showDetails(employee)}>Detail</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            {isShow && (
                <EmployeeDetail employee={employee} setIsShow={setIsShow} />
            )}
        </>
    )
}
export default Employee;