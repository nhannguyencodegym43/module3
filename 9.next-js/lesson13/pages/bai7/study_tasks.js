import {useEffect, useState} from "react";
import AddStudyTask from "./add_studyTask";
import Link from "next/link";

export default function StudyTasks () {
    const [studyTasks, setStudyTasks] = useState([]);
    useEffect(() => {
        const savedStudyTasks = JSON.parse(localStorage.getItem("studyTasks") || "[]");
        setStudyTasks(Array.isArray(savedStudyTasks) ? savedStudyTasks : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("studyTasks", JSON.stringify(studyTasks));
    }, [studyTasks]);
    const [showAddStudyTask, setShowAddStudyTask] = useState(false);
    function handleChange(id, checked) {
        setStudyTasks(prev => prev.map(studyTask => studyTask.id === id ? {...studyTask, status: checked} : studyTask));
    }
    return (
        <>
            <h2>Study Task Manager</h2>
            {showAddStudyTask && (
                <AddStudyTask studyTasks={studyTasks} setStudyTasks={setStudyTasks} />
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {studyTasks.map((studyTask) => (
                        <tr key={studyTask.id}>
                            <td>{studyTask.id}</td>
                            <td><Link href={`/bai7/studyTasks/${studyTask.id}`}>{studyTask.title}</Link></td>
                            <td><input type="checkbox" checked={studyTask.status === true} name="status" onChange={(e) => handleChange(studyTask.id, e.target.checked)}/></td>
                            <td>{studyTask.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddStudyTask(true)} style={{marginTop: "1rem"}}>Add new Study Task</button>
        </>
    )
}
