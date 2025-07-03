import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        name: "",
        age: 0,
        email: "",
        major: ""
    });
    const [errors, setErrors] = useState({});
    const fetchStudent = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/students/${id}`);
            setStudent(response.data);
        } catch (error) {
            fetchStudent();
        }
    }
    useEffect(() => {
        fetchStudent();
    }, [id])
    function handleChange (e) {
        const {name, value} = e.target;
        setStudent({...student, [name]: name === "age" ? Number(value) : value});
    }
    function handleValidate () {
        const newErrors = {};
        if (
            (!student.name.trim()) || (!student.email.trim()) || (!student.major.trim())
        ) {
            let fillMessage = "Please fill in all needed fields.";
            newErrors.name = fillMessage;
            newErrors.email = fillMessage;
            newErrors.major = fillMessage;
        }
        if (student.age <= 0) newErrors.age = "Age must be positive";
        const emailRegex = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(student.email)) newErrors.email = "Invalid email address";
        return newErrors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            try {
                await axios.patch(`http://localhost:3001/students/${id}`, student);
                navigate("/bai2");
            } catch (error) {
                setErrors(errors);
            }
        }
    }
    return (
        <>
            <h2>Edit the student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={student.name} onChange={(e) => handleChange(e)}/> <br/>
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                <input type="number" name="age" value={student.age} onChange={(e) => handleChange(e)}/> <br/>
                {errors.age && <p style={{color: "red"}}>{errors.age}</p>}
                <input type="email" name="email" value={student.email} onChange={(e) => handleChange(e)}/> <br/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <input type="text" name="major" value={student.major} onChange={(e) => handleChange(e)}/> <br/>
                {errors.major && <p style={{color: "red"}}>{errors.major}</p>}
                <button type="submit">Update</button>
            </form>
        </>
    )
}
export default EditStudent;