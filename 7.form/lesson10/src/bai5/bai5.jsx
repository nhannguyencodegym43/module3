import React from "react";
function Bai5() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false
    })
    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword || !formData.agreeToTerms) {
            alert("Please fill in all fields!");
        } else {
            alert("Successfully submitted!");
            console.log(`Thông tin đăng ký là: ${formData.username} - ${formData.email} - ${formData.agreeToTerms}!`);
        }
    }
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }
    return (
        <>
            <h1>Advanced registration form</h1>
            <form onSubmit={handleSubmit}>
                <label>Tên người dùng: </label>
                <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                <br/>
                <label>Email: </label>
                <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} />
                <br/>
                <label>Mật khẩu: </label>
                <input type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)} />
                <br/>
                <label>Nhập lại mật khẩu: </label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => handleChange(e)} />
                <br/>
                <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={(e) => handleChange(e)}/> Tôi đồng ý với điều khoản sử dụng
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai5;