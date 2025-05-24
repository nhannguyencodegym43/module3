import React from "react";

function Bai4() {
    const [tasks] = React.useState([]);
    const [task, setTask] = React.useState("");
    function addTask(e) {
        e.preventDefault();
        tasks.push(task);
        setTask("");
    }
    return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={addTask}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Bai4;