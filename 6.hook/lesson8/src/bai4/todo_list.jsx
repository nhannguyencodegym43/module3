import React from "react";
function TodoList(props) {
    return (
        <>
            <h1>To-do List</h1>
            <ul>
                {props.tasks.map((task, i) => (
                    <li key={i}>
                        {task}
                    </li>
                ))}
            </ul>
            <form onSubmit={props.addTask}>
                <input type="text" placeholder="Add a task" value={props.newTask} onChange={(e) => props.setNewTask(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default TodoList;