import {useEffect, useState} from "react";
import AddStudyTask from "./add_studyTask";
import Link from "next/link";
import {useRouter} from "next/router";

export default function StudyTasks () {
    const [studyTasks, setStudyTasks] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const router = useRouter();
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
    function handleEdit(id) {
        router.push(`/bai7/edit/${id}`);
    }
    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure you want to delete this study task?");
        if (confirmDelete) {
            const studyTasks = JSON.parse(localStorage.getItem("studyTasks") || "[]");
            const idx = studyTasks.findIndex(task => task.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedStudyTasks = [...studyTasks];
                updatedStudyTasks.splice(idx, 1);
                setStudyTasks(updatedStudyTasks);
            }
        }
    }
    const filteredStudyTasks = searchItem ? studyTasks.filter(studyTask => studyTask.title.toLowerCase().includes(searchItem.toLowerCase())) : studyTasks;
    return (
        <>
            <h2>Study Task Manager</h2>
            {showAddStudyTask && (
                <AddStudyTask studyTasks={studyTasks} setStudyTasks={setStudyTasks} />
            )}
            <input type="text" placeholder="Search by title" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudyTasks.map((studyTask) => (
                        <tr key={studyTask.id}>
                            <td>{studyTask.id}</td>
                            <td><Link href={`/bai7/studyTasks/${studyTask.id}`}>{studyTask.title}</Link></td>
                            <td><input type="checkbox" checked={studyTask.status === true} name="status" onChange={(e) => handleChange(studyTask.id, e.target.checked)}/></td>
                            <td>{studyTask.notes}</td>
                            <td><button onClick={() => handleEdit(studyTask.id)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(studyTask.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddStudyTask(true)} style={{marginTop: "1rem"}}>Add new Study Task</button>
        </>
    )
}
