import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditTodo() {
    const {id} = useParams();
    const [todo, setTodo] = useState({
        task: '',
        status: '',
        deadline: '',
        priority: '',
    });
    const navigate = useNavigate();
    const fetchTodo = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/todos/${id}`);
            setTodo(response.data);
        } catch (error) {
            alert("Error fetching todo: " + error.message);
        }
    }
    useEffect(() => {
        fetchTodo();
    }, [id])
    function handleChange(e) {
        const { name, value } = e.target;
        setTodo({...todo, [name]: value});
    }
    const [errors, setErrors] = React.useState({});
    function handleValidate() {
        const newErrors = {};
        if (
            (!todo.task.trim()) || (!todo.status) || (!todo.deadline) || (!todo.priority)
        ) {
            let fillMessage = "Please fill all fields";
            newErrors.task = fillMessage;
            newErrors.status = fillMessage;
            newErrors.deadline = fillMessage;
            newErrors.priority = fillMessage;
        }
        return newErrors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            try {
                await axios.patch(`http://localhost:3001/todos/${id}`, todo)
                navigate("/bai4");
            } catch (error) {
                setErrors(errors);
            }
        }
    }
    if (!todo) return <p>Loading...</p>
    return (
        <>
            <h2>Edit the todo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={todo.task} onChange={(e) => handleChange(e)} /> <br/>
                {errors.task && (
                    <p style={{color: "red"}}>{errors.task}</p>
                )}
                <select name="status" value={todo.status} onChange={(e) => handleChange(e)}>
                    <option value="">Choose the status of the task</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In-progress</option>
                    <option value="completed">Completed</option>
                </select>
                <br/>
                {errors.status && (
                    <p style={{color: "red"}}>{errors.status}</p>
                )}
                <input type="date" name="deadline" value={todo.deadline} onChange={(e) => handleChange(e)} /> <br/>
                {errors.deadline && (
                    <p style={{color: "red"}}>{errors.deadline}</p>
                )}
                <select name="priority" value={todo.priority} onChange={(e) => handleChange(e)}>
                    <option value="">Choose the priority of the task</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br/>
                {errors.priority && (
                    <p style={{color: "red"}}>{errors.priority}</p>
                )}
                <button type="submit">Update</button>
            </form>
        </>
    )
}
export default EditTodo;