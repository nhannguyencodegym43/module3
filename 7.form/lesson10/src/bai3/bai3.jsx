import React from "react";
function Bai3() {
    const [formData, setFormData] = React.useState({
        username: "",
        age: 0,
        gender: "",
        hobbies: []
    })
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "hobbies") {
            const updatedHobbies = checked ? [value, ...formData.hobbies] : formData.hobbies.filter(item => item !== value);
            setFormData(prev => ({...prev, hobbies: updatedHobbies}));
        } else {
            setFormData(prev => ({...prev, [name]: value}));
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.age || !formData.gender || !formData.hobbies || !formData.username) {
            alert("Please fill in all fields!");
        } else {
            alert("Succesful!");
            console.log(formData);
        }
    }
    const hobbies_list = ["Đọc sách", "Du lịch", "Thể thao", "Game"];
    return (
        <>
            <h1>Form thông tin cá nhân</h1>
            <form onSubmit={handleSubmit}>
                <label>Tên: </label>
                <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                <br/>
                <label>Tuổi: </label>
                <input type="number" name="age" value={formData.age} onChange={(e) => handleChange(e)} />
                <br/>
                <label>Giới tính: </label>
                <input type="radio" name="gender" value="Nam" checked={formData.gender === "Nam"} onChange={(e) => handleChange(e)} />Nam
                <input type="radio" name="gender" value="Nữ" checked={formData.gender === "Nữ"} onChange={(e) => handleChange(e)} />Nữ
                <input type="radio" name="gender" value="Khác" checked={formData.gender === "Khác"} onChange={(e) => handleChange(e)} />Khác
                <br/>
                <label>Sở thích: </label>
                {
                    hobbies_list.map((item, index) => (
                        <label key={index} style={{marginRight: "10px"}}>{item}
                            <input type="checkbox" name="hobbies" value={item} checked={formData.hobbies.includes(item)} onChange={(e) => handleChange(e)} />
                        </label>
                    ))
                }
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai3;