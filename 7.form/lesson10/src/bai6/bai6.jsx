import React from "react";
function Bai6() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        age: "",
        course: ""
    })
    function handleChange(e){
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    const [errors, setErrors] = React.useState({});
    function handleSubmit(e){
        e.preventDefault();
        const newErrors = handleValidation();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log(formData);
        }
    }
    function handleValidation() {
        const newErrors = {};
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
        if ((!formData.username) || (!formData.email) || (!formData.age) || (!formData.course)) {
            let fillMessage = "Please fill all the fields!";
            newErrors.username = fillMessage;
            newErrors.email = fillMessage;
            newErrors.age = fillMessage;
            newErrors.course = fillMessage;
        } else {
            if (!regexEmail.test(formData.email)) newErrors.email = "Email không hợp lệ!"
            if (formData.age < 10) newErrors.age = "Tuổi phải lớn hơn hoặc bằng 10!"
        }
        return newErrors;
    }
    const course_list = ["JS", "Python", "Java"];
    return (
        <>
            <h1>Đăng ký học lập trình</h1>
            <form onSubmit={handleSubmit}>
                <label>Tên học sinh: </label>
                <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.username && (
                    <p style={{color: "red"}}>{errors.username}</p>
                )}
                <label>Email: </label>
                <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.email && (
                    <p style={{color: "red"}}>{errors.email}</p>
                )}
                <label>Tuổi: </label>
                <input type="number" value={formData.age} name="age" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.age && (
                    <p style={{color: "red"}}>{errors.age}</p>
                )}
                <select name="course" onChange={(e) => handleChange(e)}>
                {course_list.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
                </select>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai6;