import {useEffect, useState} from "react";
import "./style.css"
import {useRouter} from "next/router";

export default function Students () {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Leanne Graham"
        },
        {
            id: 2,
            name: "Ervin Howell"
        },
        {
            id: 3,
            name: "Clementine Bauch"
        },
        {
            id: 4,
            name: "Patricia Lebsack"
        },
        {
            id: 5,
            name: "Chelsey Dietrich"
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist"
        },
        {
            id: 7,
            name: "Kurtis Weissnat"
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V"
        },
        {
            id: 9,
            name: "Glenna Reichert"
        },
        {
            id: 10,
            name: "Clementina DuBuque"
        }
    ])
    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [])
    const router = useRouter();
    return (
        <>
            <h1>Students list</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td><button onClick={() => router.push(`/bai2/${student.id}`)}>Show</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}