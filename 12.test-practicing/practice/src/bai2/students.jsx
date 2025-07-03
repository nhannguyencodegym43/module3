import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Students() {
    const [students, setStudents] = React.useState([]);
    const [searchItem, setSearchItem] = React.useState("");
    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://localhost:3001/students");
            setStudents(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchStudents();
    }, [])
    if (!students) return <p>Loading...</p>;
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
    const filteredStudents = students.length > 0 ? students.filter((item) => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
    }) : [];
    return (
        <>
            <h1>Students Management</h1>
            <Link to="/bai2/add"><button>Add new student</button></Link>
            <input type="text" value={searchItem} placeholder="Search..." onChange={(e) => setSearchItem(e.target.value)}/>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Major</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.email}</td>
                        <td>{student.major}</td>
                        <td><Link to={`/bai2/${student.id}`}><button>View</button></Link></td>
                        <td><Link to={`/bai2/edit/${student.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(student.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Students;