import './App.css'

function App() {
    const style = {}
    const studentsData = [
        {
            id: 1,
            name: "Nguyen Trung Nhan",
            age: 18,
            address: "Da Nang"
        },
        {
            id: 2,
            name: "Nguyen Trung Nghia",
            age: 20,
            address: "Ha Noi",
        },
        {
            id: 3,
            name: "Nguyen Trung Dung",
            age: 30,
            address: "TP HCM",
        }
    ]
    return (
        <>
            <table style={style} border="1">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                {
                    studentsData.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default App
