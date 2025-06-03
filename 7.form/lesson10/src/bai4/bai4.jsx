import React from "react";
function Bai4() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        food: "",
        extras: [],
        note: ""
    });
    const extras_list = ["Trứng", "Thịt bò", "Gà", "Rau"];
    const food_list = ["Cơm", "Phở", "Bún", "Mì", "Bánh mì"];
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox' || name === "extras") {
            const updatedFoods = checked ? [value, ...formData.extras] : formData.extras.filter(item => item !== value);
            setFormData(prev => ({...prev, extras: updatedFoods}));
        } else {
            setFormData(prev => ({...prev, [name]: value}));
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.food || !formData.extras) {
            alert("Please fill in all fields!");
        } else {
            alert("Succesful!");
            console.log(formData);
        }
    }
    return (
        <>
            <h1>Favourite foods</h1>
            <form onSubmit={handleSubmit}>
                <label>Tên người dùng: </label>
                <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                <br/>
                <label>Email: </label>
                <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)}/>
                <br/>
                <label>Món ưa thích: </label>
                <select name="food" value={formData.food} onChange={(e) => handleChange(e)}>
                    {food_list.map((item, index) => (
                        <option key={index} value={item} name="food" onChange={(e) => handleChange(e)}>{item}</option>
                    ))}
                </select>
                <br/>
                {extras_list.map((item, index) => (
                    <label>{item}
                    <input type="checkbox"
                           value={item}
                           key={index}
                           onChange={(e) => handleChange(e)}
                           checked={formData.extras.includes(item)}
                           style={{marginRight: "10px"}}
                    />
                    </label>
                ))}
                <br/>
                <textarea name="note" value={formData.note} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai4;