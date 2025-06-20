import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import TodoList from "./bai1/todo_list.jsx";
import AddTask from "./bai1/add_task.jsx";
import Books from "./bai2/books.jsx";
import AddBook from "./bai2/add_book.jsx";
import EditBook from "./bai2/edit_book.jsx";
import BookDetail from "./bai2/book_detail.jsx";
import Contacts from "./bai3/contacts.jsx";
import ContactDetail from "./bai3/contact_detail.jsx";
import EditContact from "./bai3/edit_contact.jsx";
import AddContact from "./bai3/add_contact.jsx";
import Users from "./bai4/users.jsx";
import EditUser from "./bai4/edit_user.jsx";
import AddUser from "./bai4/add_user.jsx";
import EditArticle from "./bai4/edit_article.jsx";

function App() {

    return (
        <>
            <Link to="/todo-list">To-do List</Link> <br/>
            <Link to="/books-list">Books List</Link> <br/>
            <Link to="/contacts">Contacts List</Link> <br/>
            <Link to="/users">Users List</Link> <br/>
            <Routes>
                <Route path="/todo-list" element={<TodoList />}></Route>
                <Route path="/todo-list/add" element={<AddTask />}></Route>
                <Route path="/books-list" element={<Books />}></Route>
                <Route path="/books-list/add" element={<AddBook />}></Route>
                <Route path="/books-list/edit/:id" element={<EditBook />}></Route>
                <Route path="/books-list/:id" element={<BookDetail />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/contacts/:id" element={<ContactDetail />}></Route>
                <Route path="/contacts/edit/:id" element={<EditContact />}></Route>
                <Route path="/contacts/add" element={<AddContact />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/users/edit/:id" element={<EditUser />}></Route>
                <Route path="/users/add" element={<AddUser />}></Route>
                <Route path="/users/edit/:id/articles/:index" element={<EditArticle />}></Route>
            </Routes>
        </>
    )
}

export default App
