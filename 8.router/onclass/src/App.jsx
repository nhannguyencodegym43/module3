import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./components/home.jsx";
import Product from "./components/product.jsx";
import Contact from "./components/contact.jsx";
import Main from "./components/main.jsx";

function App() {

    return (
        <>
            <h1>Điều hướng router</h1>
            <nav>
                <NavLink to="/home">Home</NavLink> | {" "}
                <NavLink to="/main">Main</NavLink>
            </nav>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/main" element={<Main/>}>
                    <Route index element={<Product/>}/>
                    <Route path="/main/product" element={<Product/>}/>
                    <Route path="/main/contact" element={<Contact/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App