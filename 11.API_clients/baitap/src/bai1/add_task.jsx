import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function AddTask() {
    const [task, setTask] = React.useState({
        userId: 0, title: "", completed: false
    });
    const [tasks, setTasks] = React.useState([]);
    const navigate = useNavigate();
    const fetchTasks = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setTasks(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchTasks();
    }, [])

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setTask({
            ...task,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.userId || !task.title) {
            alert("Please fill out the fields");
            return;
        }
        const maxId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;
        try {
            await axios.post("https://jsonplaceholder.typicode.com/todos", {
                userId: task.userId, id: maxId + 1, title: task.title, completed: task.completed
            }).then(res => {
                alert(`Thành công: ${res.status}`);
            })
        } catch (error) {
            alert(`Error: ${error}`);
        }
        navigate("/todo-list");
    }
    return (<>
            <h2>Add new task</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" name="userId" value={task.userId} placeholder="User Id"
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" name="title" value={task.title} placeholder="Title"
                       onChange={(e) => handleChange(e)}/> <br/>
                <label htmlFor="completed">Completed?</label>
                <input type="checkbox" name="completed" checked={task.completed} onChange={(e) => handleChange(e)}/>
                <button type="submit">Add</button>
            </form>
        </>)
}

export default AddTask;