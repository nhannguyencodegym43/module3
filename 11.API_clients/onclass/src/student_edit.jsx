import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function StudentEdit() {
    const {id} = useParams();
    const [student, setStudent] = React.useState({
        name: '',
        age: 0,
        major: ''
    })
    const navigate = useNavigate();
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/students/${id}`);
                setStudent(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchStudent();
    }, [id])
    function handleChange(e) {
        setStudent({...student, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3001/students/${id}`, student);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>Edit the student</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={student.name} onChange={(e) => handleChange(e)} />
                <input type="number" name="age" placeholder="Age" value={student.age} onChange={(e) => handleChange(e)} />
                <input type="text" name="major" placeholder="Major" value={student.major} onChange={(e) => handleChange(e)} />
                <button type="submit">Update</button>
            </form>
        </>
    )
}
export default StudentEdit;
