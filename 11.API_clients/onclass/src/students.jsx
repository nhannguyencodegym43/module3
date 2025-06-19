import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Students() {
    const [students, setStudents] = React.useState([]);
    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://localhost:3001/students");
            setStudents(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchStudents();
    }, [])
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            try {
                await axios.delete(`http://localhost:3001/students/${id}`);
                fetchStudents();
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <h1>Students List</h1>
            <Link to="add">
                <button style={{marginBottom: "1rem"}}>Add new student</button>
            </Link>
            <table border={1}>
                <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Student Age</th>
                    <th>Student Major</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.major}</td>
                        <td><Link to={`/${student.id}`}><button>View</button></Link></td>
                        <td><Link to={`/edit/${student.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(student.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Students;