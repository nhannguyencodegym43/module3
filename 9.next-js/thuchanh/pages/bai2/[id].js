import {useRouter} from "next/router";
import Layout from "./layout";
import {useEffect, useState} from "react";

export default function StudentDetail () {
    const router = useRouter();
    const { id } = router.query;
    const [student, setStudent] = useState(null);
    useEffect(() => {
        const savedStudents = JSON.parse(localStorage.getItem("students") || "[]");
        const foundStudent = savedStudents.find((student) => student.id.toString() === id);
        setStudent(foundStudent);
    }, [id])
    if (!student) return <p>Student loading or not found...</p>
    return (
        <>
            <Layout>
                <h1>Student Information</h1>
                <p>ID: {id} - Name: {student.name}</p>
            </Layout>
        </>
    )
}