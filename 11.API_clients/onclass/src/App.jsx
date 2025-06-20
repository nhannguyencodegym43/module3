import './App.css'
import Students from "./students.jsx";
import {Route, Routes} from "react-router-dom";
import StudentAdd from "./student_add.jsx";
import StudentDetail from "./student_detail.jsx";
import StudentEdit from "./student_edit.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Students />}></Route>
                <Route path="/add" element={<StudentAdd />}></Route>
                <Route path="/:id" element={<StudentDetail />}></Route>
                <Route path="/edit/:id" element={<StudentEdit />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    )
    function NotFound() {
        return (
            <p>Page not found...</p>
        )
    }
}
export default App;

