import React from "react";
function Bai5() {
    const [Id, setId] = React.useState(1);
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [students, setStudents] = React.useState([]);

    let tableStyle = {
        display: "inline-block",
        margin: "10px auto",
    }
    function addStudent(student) {
        setStudents(prev => [...prev, student]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newStudent = {
            id: Id,
            name: name,
            number: number,
            email: email,
        };
        addStudent(newStudent);
        setId(Id + 1);
        setName("");
        setNumber("");
        setEmail("");
    }
    function editStudent(id) {
        let newName = prompt("Enter the new name");
        let newNumber = prompt("Enter the new number");
        let newEmail = prompt("Enter the new email");
        if (newName) {
            setStudents(prev => prev.map((student, index) => index === id ? {...student, name: newName} : student));
        }
        if (newNumber) {
            setStudents(prev => prev.map((student, index) => index === id ? {...student, number: newNumber} : student));
        }
        if (newEmail) {
            setStudents(prev => prev.map((student, index) => index === id ? {...student, email: newEmail} : student));
        }
    }
    function deleteStudent(id) {
        setStudents(prev => prev.filter((student, index) => index !== id));
    }
    return (
        <>
            <h1>Student List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <table style={tableStyle} border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Number</th>
                    <th>Email</th>
                    <th colSpan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.number}</td>
                        <td>{student.email}</td>
                        <td><button onClick={() => editStudent(index)}>Edit</button></td>
                        <td><button onClick={() => deleteStudent(index)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Bai5;