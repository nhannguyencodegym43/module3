import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Edit() {
    const [task, setTask] = useState({
        id: 0,
        title: "",
        status: false
    });
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if (id !== undefined) {
            const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            const foundTask = savedTasks.find((task) => task.id.toString() === id);
            if (foundTask) setTask(foundTask);
        }
    }, [id])
    function handleChange(e){
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setTask({ ...task, status: checked });
        } else {
            setTask({ ...task, [name]: value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const idx = tasks.findIndex((task) => task.id.toString() === id);
        if (idx !== -1) {
            tasks[idx] = task;
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        router.push('/bai2/tasks');
    }
    return (
        <>
            <h2>Edit the task</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" name="id" placeholder="Task ID" value={task.id}
                       onChange={(e) => handleChange(e)}/>
                <input type="text" name="title" placeholder="Task title" value={task.title}
                       onChange={(e) => handleChange(e)}/>
                <input type="checkbox" name="status" checked={task.status === true}
                       onChange={(e) => handleChange(e)}/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}