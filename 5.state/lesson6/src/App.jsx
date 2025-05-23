import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import {useState} from "react";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Products from "./components/products.jsx";
import Comment_Section from "./components/comment_section.jsx";
import Comment_Form from "./components/comment_form.jsx";
import LoginForm from "./components/login_form.jsx";
import MenuBar from "./components/menu_bar.jsx";
import RegisterPage from "./components/register_page.jsx";
import FeaturePanel from "./components/feature_panel.jsx";

function App() {
    // Bai 1
    const [users] = useState(["Nguyễn", "Trung", "Nhân"]);
    const [search, setSearch] = useState("");
    const filterUsers = users.filter((user) =>
        user.toLowerCase().includes(search.toLowerCase())
    );

    // Bai 2
    const [tasks, setTasks] = useState([])
    function addTask(newTask) {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
    }

    // Bai 4
    const [comments, setComments] = useState([]);
    function addComment(newComment) {
        if (newComment.trim() === "") return;
        setComments([...comments, newComment]);
    }
  return (
    <>
        <SearchBar filterUsers={filterUsers} search={search} setSearch={setSearch} />
        <TodoList tasks={tasks} />
        <TodoForm addTask={addTask} />
        <Products />
        <Comment_Section comments={comments} />
        <Comment_Form addComment={addComment} />
        <LoginForm />
        <MenuBar />
        <RegisterPage />
        <FeaturePanel />
    </>
  )
}

export default App
