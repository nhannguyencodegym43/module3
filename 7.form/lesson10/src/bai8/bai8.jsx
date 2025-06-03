import React from "react";
function Bai8() {
    const [formData, setFormData] = React.useState({
        username: "",
        address: "",
        phone: "",
        cakeType: "",
        note: "",
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
        if ((!formData.username) || (!formData.address) || (!formData.phone) || (!formData.cakeType)) {
            let fillMessage = "Please fill all the fields!";
            newErrors.username = fillMessage;
            newErrors.address = fillMessage;
            newErrors.phone = fillMessage;
            newErrors.cakeType = fillMessage;
        } else {
            if (formData.phone.length !== 10) newErrors.phone = "Số điện thoại phải đủ 10 số!";
            if (isNaN(formData.phone)) newErrors.phone = "Số điện thoại phải là số!"
        }
        return newErrors;
    }
    const cake_list = ["Bánh bèo", "Bánh ú", "Bánh ít"];
    return (
        <>
            <h1>Đặt bánh sinh nhật</h1>
            <form onSubmit={handleSubmit}>
                <label>Họ tên: </label>
                <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.username && (
                    <p style={{color: "red"}}>{errors.username}</p>
                )}
                <label>Địa chỉ: </label>
                <input type="text" value={formData.address} name="address" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.address && (
                    <p style={{color: "red"}}>{errors.address}</p>
                )}
                <label>Số điện thoại: </label>
                <input type="number" value={formData.phone} name="phone" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.phone && (
                    <p style={{color: "red"}}>{errors.phone}</p>
                )}
                <select name="cakeType" onChange={(e) => handleChange(e)}>
                    <option value="">Mời chọn</option>
                    {cake_list.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <br/>
                <textarea name="note" value={formData.note} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
                <br/>
                {errors.note && (
                    <p style={{color: "red"}}>{errors.note}</p>
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai8;