import {useEffect, useState} from "react";
import AddTask from "./add_task";
import Link from "next/link";

export default function Tasks () {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(Array.isArray(savedTasks) ? savedTasks : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const [showAddTask, setShowAddTask] = useState(false);
    function handleChange(id, checked) {
        setTasks(prev => prev.map(task => task.id === id ? {...task, status: checked} : task));
    }
    function handleEdit (id) {
        const products = JSON.parse(localStorage.getItem("products") || "[]");
    }
    return (
        <>
            <h2>Task Manager</h2>
            {showAddTask && (
                <AddTask tasks={tasks} setTasks={setTasks} />
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td><Link href={`/bai2/tasks/${task.id}`}>{task.title}</Link></td>
                            <td><input type="checkbox" checked={task.status === true} name="status" onChange={(e) => handleChange(task.id, e.target.checked)}/></td>
                            <td> <button onClick={() => handleEdit(task.id)}>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddTask(true)} style={{marginTop: "1rem"}}>Add new task</button>
        </>
    )
}
