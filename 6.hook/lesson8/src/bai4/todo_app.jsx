import React, {useEffect} from "react";
import TodoList from "./todo_list.jsx";
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
            <TodoList tasks={tasks} addTask={addTask} newTask={newTask} setNewTask={setNewTask} />
        </>
    )
}
export default TodoApp;