import React from "react";
function Bai7() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        phone: "",
        message: "",
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
            alert("Successful!")
            console.log(formData);
        }
    }
    function handleValidation() {
        const newErrors = {};
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
        if ((!formData.username) || (!formData.email) || (!formData.phone) || (!formData.message)) {
            let fillMessage = "Please fill all the fields!";
            newErrors.username = fillMessage;
            newErrors.email = fillMessage;
            newErrors.phone = fillMessage;
            newErrors.message = fillMessage;
        } else {
            if (!regexEmail.test(formData.email)) newErrors.email = "Email không hợp lệ!"
            if (formData.phone.length !== 10) newErrors.phone = "Số điện thoại phải đủ 10 số!"
            if (formData.message.length < 10) newErrors.message = "Lời nhắn dài từ 10 ký tự trở lên!"
        }
        return newErrors;
    }
    return (
        <>
            <h1>Yêu cầu tư vấn</h1>
            <form onSubmit={handleSubmit}>
                <label>Họ tên: </label>
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
                <label>Số điện thoại: </label>
                <input type="number" value={formData.phone} name="phone" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.phone && (
                    <p style={{color: "red"}}>{errors.phone}</p>
                )}
                <textarea name="message" value={formData.message} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
                <br/>
                {errors.message && (
                    <p style={{color: "red"}}>{errors.message}</p>
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai7;