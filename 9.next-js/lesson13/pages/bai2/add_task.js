import {useState} from "react";

export default function AddTask({setTasks, tasks}) {
    const [title, setTitle] = useState("");

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const taskId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;
        const newTask = {
            id: taskId + 1,
            title: title,
            status: false
        }
        setTasks([newTask, ...tasks]);
        localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
        setTitle("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Task title" value={title}
                       onChange={(e) => handleChange(e)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}