import './App.css'
import Bai1 from "./bai1/bai1.jsx";
import {Link, Route, Routes} from "react-router-dom";
import AddProduct from "./bai1/add_product.jsx";
import ProductDetail from "./bai1/product_detail.jsx";
import EditProduct from "./bai1/edit_product.jsx";
import Students from "./bai2/students.jsx";
import AddStudent from "./bai2/add_student.jsx";
import StudentDetails from "./bai2/student_detail.jsx";
import EditStudent from "./bai2/edit_student.jsx";
import Blogs from "./bai3/blogs.jsx";
import AddBlog from "./bai3/add_blog.jsx";
import BlogDetails from "./bai3/blog_detail.jsx";
import EditBlog from "./bai3/edit_blog.jsx";
import Todos from "./bai4/todos.jsx";
import AddTodo from "./bai4/add_todo.jsx";
import TodoDetails from "./bai4/todo_details.jsx";
import EditTodo from "./bai4/edit_todo.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/bai1" element={<Bai1 />} />
                <Route path="/bai1/add" element={<AddProduct />} />
                <Route path="/bai1/:id" element={<ProductDetail />} />
                <Route path="/bai1/edit/:id" element={<EditProduct />} />

                <Route path="/bai2" element={<Students />} />
                <Route path="/bai2/add" element={<AddStudent />} />
                <Route path="/bai2/:id" element={<StudentDetails />} />
                <Route path="/bai2/edit/:id" element={<EditStudent />} />

                <Route path="/bai3" element={<Blogs />} />
                <Route path="/bai3/add" element={<AddBlog />} />
                <Route path="/bai3/:id" element={<BlogDetails />} />
                <Route path="/bai3/edit/:id" element={<EditBlog />} />

                <Route path="/bai4" element={<Todos />} />
                <Route path="/bai4/add" element={<AddTodo />} />
                <Route path="/bai4/:id" element={<TodoDetails />} />
                <Route path="/bai4/edit/:id" element={<EditTodo />} />
            </Routes>
            <Link to="/bai1">Bài 1</Link> <br/>
            <Link to="/bai2">Bài 2</Link> <br/>
            <Link to="/bai3">Bài 3</Link> <br/>
            <Link to="/bai4">Bài 4</Link> <br/>
        </>
    )
}

export default App