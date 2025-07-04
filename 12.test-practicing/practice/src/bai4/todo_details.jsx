import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function TodoDetails() {
    const {id} = useParams();
    const [todo, setTodo] = React.useState(null);
    const fetchTodo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/todos/${id}`);
            setTodo(response.data);
        } catch (error) {
            alert("Error fetching todo details: " + error.message);
        }
    }
    useEffect(() => {
        fetchTodo();
    }, [id])
    if (!todo) return <p>Loading...</p>;
    return (
        <>
            <h2>Todo Details</h2>
            <p>ID: {todo.id}</p>
            <p>Task: {todo.task}</p>
            <p>Status: {todo.status}</p>
            <p>Deadline: {todo.deadline}</p>
            <p>Priority: {todo.priority}</p>
        </>
    )
}
export default TodoDetails;