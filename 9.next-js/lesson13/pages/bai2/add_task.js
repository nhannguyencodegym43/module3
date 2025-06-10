import {useState} from "react";

export default function AddTask({setTasks, tasks}) {
    const [taskId, setTaskId] = useState(1);
    const [title, setTitle] = useState("");

    function handleChange(e) {
        setTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            id: taskId,
            title: title,
            status: false
        }
        setTasks([newTask, ...tasks]);
        localStorage.setItem("tasks", JSON.stringify([newTask, ...tasks]));
        setTaskId(prev => prev + 1);
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