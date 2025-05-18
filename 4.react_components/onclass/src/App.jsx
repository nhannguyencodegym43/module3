import './App.css'
import Bai1 from "./components/buoi4/bai1.jsx";
import Bai2 from "./components/buoi4/bai2.jsx";
import Bai3 from "./components/buoi4/bai3.jsx";
import Bai4 from "./components/buoi4/bai4.jsx";
import Bai5_parent from "./components/buoi4/bai5_parent.jsx";
import Bai6 from "./components/buoi4/bai6.jsx";
import Bai7 from "./components/buoi4/bai7.jsx";
import Bai8_SearchBar from "./components/buoi4/bai8_SearchBar.jsx";
import Bai9_Alert from "./components/buoi4/bai9_Alert.jsx";
import Bai10_Navbar from "./components/buoi4/bai10_Navbar.jsx";
import Bai11_ContactForm from "./components/buoi4/bai11_ContactForm.jsx";

function App() {
    const items = [
        {
            title: "Facebook",
            address: "https://www.facebook.com/"
        },
        {
            title: "Amazon",
            address: "https://www.amazon.com/"
        },
        {
            title: "Netflix",
            address: "https://www.netflix.com/"
        },
        {
            title: "Google",
            address: "https://www.google.com/"
        },
    ]
  return (
    <>
        <Bai1 />
        <Bai2 name="Nhân" />
        <Bai3 age="90"/>
        <Bai4 />
        <Bai5_parent />
        <Bai6 isLoggedIn = "true" />
        <Bai7 />
        <Bai8_SearchBar />
        <Bai9_Alert type="success" message="Thành công!" />
        <Bai10_Navbar links={items} />
        <Bai11_ContactForm />
    </>
  )
}

export default App
