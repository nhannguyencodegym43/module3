import React from "react";

function Bai9() {
    const [formData, setFormData] = React.useState({
        username: "",
        gpa: "",
        familyIncome: "",
        major: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const [errors, setErrors] = React.useState({});

    function handleSubmit(e) {
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
        if ((!formData.username) || (!formData.familyIncome) || (!formData.major) || (!formData.gpa)) {
            let fillMessage = "Please fill all the fields!";
            newErrors.username = fillMessage;
            newErrors.familyIncome = fillMessage;
            newErrors.major = fillMessage;
            newErrors.gpa = fillMessage;
        } else {
            if (formData.gpa < 0 || formData.gpa > 4) newErrors.gpa = "Điểm không hợp lệ!";
            if (formData.familyIncome < 0) newErrors.familyIncome = "Thu nhập gia đình không hợp lệ!";
        }
        return newErrors;
    }

    const major_list = ["Technology", "Business", "Self-development"];
    return (
        <>
            <h1>Đăng ký nhận học bổng</h1>
            <form onSubmit={handleSubmit}>
                <label>Họ tên: </label>
                <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.username && (
                    <p style={{color: "red"}}>{errors.username}</p>
                )}
                <label>Điểm GPA: </label>
                <input type="number" value={formData.gpa} name="gpa" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.gpa && (
                    <p style={{color: "red"}}>{errors.gpa}</p>
                )}
                <label>Kinh tế gia đình: </label>
                <input type="number" value={formData.familyIncome} name="familyIncome"
                       onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.familyIncome && (
                    <p style={{color: "red"}}>{errors.familyIncome}</p>
                )}
                <select name="major" onChange={(e) => handleChange(e)}>
                    <option value="">Mời chọn</option>
                    {major_list.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <br/>
                {errors.major && (
                    <p style={{color: "red"}}>{errors.major}</p>
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Bai9;