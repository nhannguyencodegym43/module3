import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddStudent() {
    const navigate = useNavigate();
    const [student, setStudent] = React.useState({
        name: "",
        age: 0,
        email: "",
        major: ""
    });
    const [students, setStudents] = React.useState([]);
    const [errors, setErrors] = React.useState({});
    const fetchStudents = async () => {
        try {
            const response = await axios.get("http://localhost:3001/students");
            setStudents(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchStudents();
    }, [])
    function handleChange(e) {
        const { name, value } = e.target;
        setStudent({...student, [name]: name === "age" ? Number(value) : value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        const maxId = students.length > 0 ? Math.max(...students.map(s => s.id)) : 0;
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({})
            try {
                const newStudent = {
                    id: (maxId + 1).toString(),
                    ...student,
                };
                await axios.post("http://localhost:3001/students", newStudent)
                navigate("/bai2");
            } catch (error) {
                console.error(error);
            }
        }
    }
    function handleValidate() {
        const newErrors = {};
        if (student.age <= 0) newErrors.age = "Age must be positive";
        const emailRegex = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
        if (
            (!student.name.trim()) || (!student.email.trim()) || (!student.major.trim())
        ) {
            let fillMessage = "Please fill in all fields.";
            newErrors.name = fillMessage;
            newErrors.email = fillMessage;
            newErrors.major = fillMessage;
        }
        if (!emailRegex.test(student.email)) newErrors.email = "Invalid email address";
        return newErrors;
    }
    return (
        <>
            <h2>Add new student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={student.name} onChange={(e) => handleChange(e)}/> <br/>
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                <input type="number" name="age" placeholder="Age" value={student.age} onChange={(e) => handleChange(e)}/> <br/>
                {errors.age && <p style={{color: "red"}}>{errors.age}</p>}
                <input type="email" name="email" placeholder="Email" value={student.email} onChange={(e) => handleChange(e)}/> <br/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <input type="text" name="major" placeholder="Major" value={student.major} onChange={(e) => handleChange(e)}/> <br/>
                {errors.major && <p style={{color: "red"}}>{errors.major}</p>}
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default AddStudent;