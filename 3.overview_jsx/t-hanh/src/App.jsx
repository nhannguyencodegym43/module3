import './App.css'

function App() {
    const myName = "Nguyễn Trung Nhân";
    let fruits = ["Apple", "Banana", "Strawberry"];
    let date = new Date();
    let time = date.toLocaleTimeString()
  return (
    <>
        <h1>My name is {myName}</h1>
        <ul>
            {
                fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))
            }
        </ul>
        <h2>The day is {time}</h2>
    </>
  )
}

export default App
