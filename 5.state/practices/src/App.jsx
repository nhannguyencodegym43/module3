import './App.css'
import Bai1 from "./components/Bai1.jsx";
import Bai2 from "./components/Bai2.jsx";
import Bai3 from "./components/Bai3.jsx";
import Bai4 from "./components/Bai4.jsx";
import Bai5 from "./components/Bai5.jsx";
import Bai6 from "./components/Bai6.jsx";
import Bai7 from "./components/Bai7.jsx";
import Bai8 from "./components/bai8.jsx";
import Bai9 from "./components/bai9.jsx";
import Bai10 from "./components/bai10.jsx";
import Bai11 from "./components/bai11.jsx";
import Bai12 from "./components/bai12.jsx";
import Bai13 from "./components/bai13.jsx";
import Bai17 from "./components/bai17.jsx";
import Bai18 from "./components/bai18.jsx";
import Bai19 from "./components/bai19.jsx";
import Bai20 from "./components/bai20.jsx";
import Bai21 from "./components/bai21.jsx";
import Bai22 from "./components/bai22.jsx";
import Bai23 from "./components/bai23.jsx";
import Bai24 from "./components/bai24.jsx";
import Bai25 from "./components/bai25.jsx";
import Bai26_Submit from "./components/bai26_submit.jsx";
import Bai26_Reset from "./components/bai26_reset.jsx";
import Bai27 from "./components/bai27.jsx";
import Bai28 from "./components/bai28.jsx";
import Bai29 from "./components/bai29.jsx";
import Bai30 from "./components/bai30.jsx";

function App() {
    function handleNotify(message) {
        alert(message);
    }
    function handleNotifyProduct(product) {
        alert(product);
    }
    function handleButtons(button) {
        alert(button);
    }
    function handleOptions(option) {
        alert(option);
    }
    function handlePictures(picture) {
        alert(picture);
    }
    function handleButtonOrder(buttonOrder) {
        alert(buttonOrder);
    }
    function handleInput(text) {
        console.log(text);
    }
    const products = [
        "Android",
        "Tablet",
        "Lenovo"
    ]
    function handleFinding (keyword) {
        const filteredProduct = products.filter((product) => {
            return product.toLowerCase().includes(keyword.toLowerCase());
        })
        console.log(filteredProduct);
    }
    function handleChanges(text) {
        console.log(text);
    }
    function handleCheckboxes (checkbox) {
        alert(`Bạn đã chọn ${checkbox}`);
    }
    function handleRadios (radio) {
        alert(radio);
    }
    function calculateSquare (num) {
        let res = num * num;
        alert("The square is " + res);
    }
    function handleFormInputs (input) {
        console.log(input);
    }
    function handleLoginData (data) {
        console.log("Thông tin đăng nhập", data);
    }
    function addInputs ({num1, num2}) {
        alert(`The result is ${num1 + num2}`);
    }
    function showFeedbacks (feedback) {
        alert(feedback);
    }
    let contentData = []
    function showContents ({title, description}) {
        let anItem = {title, description};
        contentData.push(anItem);
        console.log(contentData);
    }
    function showRegistrations ({name, email, job}) {
        alert(`The name is ${name}, the email is ${email} and the job is ${job}.`);
    }
    const buttons = [
        {
            id: "1",
            type: "submit"
        },
        {
            id: "2",
            type: "reset"
        }
    ]
    function showID (id) {
        alert(id);
    }
    function showDateChange (date) {
        alert(date);
    }
    function changeBgColorById (color) {
        const box = document.getElementById("targetBox");
        if (box) {
            box.style.backgroundColor = color;
        }
    }
    function showBiggerPics (link) {
        const biggerPic = document.getElementById("targetPic");
        if (link) {
            biggerPic.src = link;
        }
    }
  return (
    <>
        <Bai1 />
        <Bai2 name="Nguyen Trung Nhan" />
        <Bai3 />
        <Bai4 onNotify={handleNotify} />
        <Bai5 handleNotifyProduct={handleNotifyProduct} />
        <Bai6 handleButtons={handleButtons} />
        <Bai7 handleOptions={handleOptions} />
        <Bai8 handlePictures={handlePictures} /> <br />
        <Bai9 handleButtonOrder={handleButtonOrder} />
        <Bai10 messageToChild="Hihi" />
        <Bai11 handleInput={handleInput} />
        <Bai12 handleFinding={handleFinding} /> <br />
        <Bai13 handleChanges={handleChanges} />
        <Bai17 handleCheckboxes={handleCheckboxes} /> <br />
        <Bai18 handleRadios={handleRadios} />
        <Bai19 calculateSquare={calculateSquare} />
        <Bai20 handleFormInputs={handleFormInputs} />
        <Bai21 onLogin={handleLoginData} />
        <Bai22 onAdd={addInputs} />
        <Bai23 showFeedbacks={showFeedbacks} />
        <Bai24 showContents={showContents} />
        <Bai25 showRegistrations={showRegistrations} />
        <Bai26_Submit id={buttons[0].id} type={buttons[0].type} showID={showID} />
        <Bai26_Reset id={buttons[1].id} type={buttons[1].type} showID={showID}/>
        <Bai27 />
        <Bai28 showDateChange={showDateChange}/>
        <div id="targetBox" style={{
            color: "black",
            border: "1px solid black",
            padding: "10px",
        }}>
            This is the thing to change background color
        </div>
        <Bai29 onChangeColor={changeBgColorById} />
        <Bai30 showBiggerPics={showBiggerPics} />
        <img src="" alt="" id="targetPic" style={{width: "600px", height: "300px"}} />
    </>
  )
}

export default App
