import React, {useEffect} from "react";
function TodoApp() {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");
    function addTask(e) {
        e.preventDefault();
        if (newTask.trim() === "") return;
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTask("");
    }

    useEffect(() => {
        if (tasks.length > 0) {
            console.log("Đã thêm việc thành công!");
        }
    }, [tasks]);
    return (
        <>
            <h1>To-do List</h1>
            <ul>
                {tasks.map((task, i) => (
                    <li key={i}>
                        {task}
                    </li>
                ))}
            </ul>
            <form onSubmit={addTask}>
                <input type="text" placeholder="Add a task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default TodoApp;