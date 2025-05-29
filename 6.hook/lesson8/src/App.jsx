import './App.css'
import Language from "./bai1/language.jsx";
import Shop from "./bai2/shop.jsx";
import Clock from "./bai3/clock.jsx";
import TodoApp from "./bai4/todo_app.jsx";
import Colors from "./bai5/colors.jsx";
import BookList from "./bai6/book_list.jsx";
import TempTransfer from "./bai7/temp_transfer.jsx";
import QuizApp from "./bai8/quiz_app.jsx";

function App() {

    return (
        <>
            <Language/>
            <Shop/>
            <Clock />
            <TodoApp />
            <Colors />
            <BookList />
            <TempTransfer />
            <QuizApp />
        </>
    )
}

export default App
