import React from "react";

function Bai1() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        frequency: "",
        interests: []
    });

    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.frequency) {
            alert("Please fill in all fields!");
        } else {
            alert(`Cảm ơn ${formData.username} đã đăng ký!
        Tần suất: ${formData.frequency};
        Chủ đề quan tâm: ${formData.interests.join(", ")}
            `);
        }
    }

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        if (type === "checkbox") {
            setFormData(prev => {
                const updateInterests = checked ? [...prev.interests, value] : prev.interests.filter(interest => interest !== value);
                return {
                    ...prev, interests: updateInterests
                }
            })
        } else {
            setFormData((prev) => ({...prev, [name]: value}));
        }
    }
    const frequency_list = ["Hằng ngày", "Hằng tuần", "Hằng tháng"]
    return (
        <>
            <h1>Đăng ký nhận tin</h1>
            <form onSubmit={handleSubmit}>
                <label>Họ tên:
                    <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                <label>Email:
                    <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                <select name="frequency" value={formData.frequency} onChange={(e) => handleChange(e)}>
                    <option value="">Chọn tần suất</option>
                    {
                        frequency_list.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))
                    }
                </select>
                <br/>
                <input type="checkbox" name="interests" value="technology"
                       checked={formData.interests.includes("technology")} onChange={(e) => handleChange(e)}/>Tin công
                nghệ
                <input type="checkbox" name="interests" value="deal" checked={formData.interests.includes("deal")}
                       onChange={(e) => handleChange(e)}/>Ưu đãi
                <input type="checkbox" name="interests" value="news" checked={formData.interests.includes("news")}
                       onChange={(e) => handleChange(e)}/>Tin tức
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Bai1;