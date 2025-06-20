import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function TodoList() {
    const [todos, setTodos] = React.useState([]);
    const fetchTodos = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTodos();
    }, [])
    return (
        <>
            <h1>To-do List</h1>
            <Link to="/todo-list/add">
                <button style={{marginBottom: "1rem"}}>Add new task</button>
            </Link>
            <table border={1}>
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>Task ID</th>
                    <th>Task title</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default TodoList;