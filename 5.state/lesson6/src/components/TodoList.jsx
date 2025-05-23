import React from "react";
function TodoList(props) {
    return (
        <>
            <h1>Tasks list</h1>
            <ul>
                {props.tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TodoList;