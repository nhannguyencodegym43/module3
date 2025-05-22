import './App.css'
import OnClick from "./components/onClick.jsx";
import OnDoubleClick from "./components/onDoubleClick.jsx";
import OnMouseEnter_onMouseLeave from "./components/onMouseEnter_onMouseLeave.jsx";
import OnMouseOver_OnMouseOut from "./components/OnMouseOver_OnMouseOut.jsx";
import Focus_Blur from "./components/Focus_Blur.jsx";
import OnKeyUp_OnKeyDown from "./components/OnKeyUp_OnKeyDown.jsx";
import OnSubmit from "./components/OnSubmit.jsx";
import OnChange from "./components/OnChange.jsx";
import Child from "./components/Child.jsx";
import Increase_Decrease from "./components/Increase_Decrease.jsx";
import SearchBox_Child from "./components/SearchBox_Child.jsx";
import CountrySelector from "./components/CountrySelector.jsx";
import Header_Content from "./components/header_content.jsx";
import Red_Blue from "./components/red_blue.jsx";
import Email_Input from "./components/email_input.jsx";
import Products from "./components/products.jsx";
import Cart from "./components/Cart.jsx";

function App() {
    function handleClick() {
        alert("Hello World!");
    }
    const products = [
        "Iphone",
        "Android",
        "Ipad",
        "Macbook",
        "Imac"
    ]
    function handleSearch(keyword) {
        const filtered = products.filter((item) => {
            return item.toLowerCase().includes(keyword.toLowerCase());
        })
        console.log(filtered);
    }
    function handleSelect(code) {
        const greetings = {
            VN: "Xin chào!",
            US: "Hello!",
            JP: "Kon ni chi wa!"
        }
        console.log(greetings[code]);
    }
  return (
    <>
        <OnClick />
        <OnDoubleClick />
        <OnMouseEnter_onMouseLeave />
        <OnMouseOver_OnMouseOut />
        <Focus_Blur />
        <OnKeyUp_OnKeyDown />
        <OnSubmit />
        <OnChange />
        <Child handleClick={handleClick} />
        <Increase_Decrease />
        <SearchBox_Child handleSearch={handleSearch} />
        <CountrySelector handleSelect={handleSelect} />
        <Header_Content />
        <Red_Blue />
        <Email_Input />
        <Products />
        <Cart />
    </>
  )
}

export default App
