import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "./spinner.jsx";
function Todos() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchItem, setSearchItem] = React.useState("");
    const fetchTodos = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3001/todos");
            setTodos(response.data);
        } catch (error) {
            alert("Việc truy xuất dữ liệu hiện đang gặp lỗi là: " + error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchTodos();
    }, [])
    if (!todos) return <p>Loading...</p>;
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete it?")) {
            try {
                await axios.delete(`http://localhost:3001/todos/${id}`);
                fetchTodos();
            } catch (error) {
                alert("Error deleting todo: " + error.message);
            }
        }
    }
    const filteredTodos = todos.length > 0 ? todos.filter((item) => {
        return item.task.toLowerCase().includes(searchItem.toLowerCase());
    }) : [];
    const [sortBy, setSortBy] = React.useState("task");
    const [sortOrder, setSortOrder] = React.useState("asc");
    const sortedStudents = [...todos].sort((a, b) => {
        const taskA = a.task.toLowerCase();
        const taskB = b.task.toLowerCase();
        return taskA.localeCompare(taskB);
    })
    return (
        <>
            {loading && (
                <Spinner />
            )}
            <h1>To-do List</h1>
            <Link to="/bai4/add"><button>Add new task</button></Link>
            <input type="text" value={searchItem} placeholder="Search the task..." onChange={(e) => setSearchItem(e.target.value)} />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Chọn cách sắp xếp</option>
                <option value="task">Sắp xếp theo tên task</option>
                <option value="">Sắp xếp theo hạn chót</option>
            </select>
            <button>
                {sortOrder === "asc" ? "Tăng dần" : "Giảm dần"}
            </button>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {sortedStudents.map((todo) => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.task}</td>
                        <td>{todo.status}</td>
                        <td>{todo.deadline}</td>
                        <td>{todo.priority}</td>
                        <td><Link to={`/bai4/${todo.id}`}><button>View</button></Link></td>
                        <td><Link to={`/bai4/edit/${todo.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(todo.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Todos;