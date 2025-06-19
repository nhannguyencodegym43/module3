import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
function StudentAdd() {
    const [student, setStudent] = useState({
        name: '',
        age: 0,
        major: ''
    });
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
    const navigate = useNavigate();
    function handleChange(e) {
        setStudent({...student, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const maxId = students.length > 0 ? Math.max(...students.map(s => s.id)) : 0;
        try {
            await axios.post("http://localhost:3001/students", {
                id: (maxId + 1).toString(),
                ...student,
            })
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <h1>Add new student</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={student.name} onChange={(e) => handleChange(e)} />
                <input type="number" name="age" placeholder="Age" value={student.age} onChange={(e) => handleChange(e)} />
                <input type="text" name="major" placeholder="Major" value={student.major} onChange={(e) => handleChange(e)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default StudentAdd;