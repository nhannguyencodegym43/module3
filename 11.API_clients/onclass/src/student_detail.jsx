import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function StudentDetail() {
    const {id} = useParams();
    const [student, setStudent] = React.useState(null);
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/students/${id}`);
                setStudent(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchStudent();
    }, [id])
    if (!student) {
        return <p>Student not found...</p>;
    }
    return (
        <>
            <h2>Student Detail</h2>
            <p>Id: {student.id}</p>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Major: {student.major}</p>
        </>
    )
}
export default StudentDetail;
