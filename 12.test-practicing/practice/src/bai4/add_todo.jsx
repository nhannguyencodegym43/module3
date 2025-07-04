import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddTodo() {
    const [todo, setTodo] = React.useState({
        task: '',
        status: '',
        deadline: '',
        priority: ''
    });
    const [todos, setTodos] = React.useState([]);
    const navigate = useNavigate();
    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3001/todos");
            setTodos(response.data);
        } catch (error) {
            alert("Việc truy xuất dữ liệu hiện đang gặp lỗi là: " + error.message);
        }
    }
    useEffect(() => {
        fetchTodos();
    }, [])
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
            const maxId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) : 0;
            const newTodo = {
                id: (maxId + 1).toString(),
                ...todo,
            }
            try {
                await axios.post("http://localhost:3001/todos", newTodo)
                navigate("/bai4");
            } catch (error) {
                setErrors(errors);
            }
        }
    }
    if (!todos) return <p>Loading...</p>
    return (
        <>
            <h2>Add the new todo</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Task" value={todo.task} onChange={(e) => handleChange(e)} /> <br/>
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
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default AddTodo;