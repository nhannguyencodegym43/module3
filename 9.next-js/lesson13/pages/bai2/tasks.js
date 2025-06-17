import {useEffect, useState} from "react";
import AddTask from "./add_task";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Tasks () {
    const [tasks, setTasks] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const router = useRouter();
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
        router.push(`/bai2/edit/${id}`);
    }
    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            const idx = tasks.findIndex((task) => task.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedTasks = [...tasks];
                updatedTasks.splice(idx, 1);
                setTasks(updatedTasks);
            }
        }
    }
    const filteredTasks = searchItem ? tasks.filter((task) => task.title.toLowerCase().includes(searchItem.toLowerCase())) : tasks;
    return (
        <>
            <h2>Task Manager</h2>
            {showAddTask && (
                <AddTask tasks={tasks} setTasks={setTasks} />
            )}
            <input type="text" name="filtered" placeholder="Type the tasks you want to find..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
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
                    {filteredTasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td><Link href={`/bai2/tasks/${task.id}`}>{task.title}</Link></td>
                            <td><input type="checkbox" checked={task.status === true} name="status" onChange={(e) => handleChange(task.id, e.target.checked)}/></td>
                            <td><button onClick={() => handleEdit(task.id)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(task.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddTask(true)} style={{marginTop: "1rem"}}>Add new task</button>
        </>
    )
}
