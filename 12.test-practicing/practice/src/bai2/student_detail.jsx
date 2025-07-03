import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function StudentDetails() {
    const { id } = useParams();
    const [student, setStudent] = React.useState(null);
    const fetchStudent = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/students/${id}`);
            setStudent(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchStudent();
    }, [id])
    if (!student) return <p>Loading...</p>;
    return (
        <>
            <h2>Student Details</h2>
            <p>ID: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Email: {student.email}</p>
            <p>Major: {student.major}</p>
        </>
    )
}
export default StudentDetails;