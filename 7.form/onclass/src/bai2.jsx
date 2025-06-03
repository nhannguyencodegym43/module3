import React from "react";

function Bai2() {
    const [formData, setFormData] = React.useState({
        childName: "",
        age: 0,
        parentName: "",
        address: "",
        giftType: "",
        gender: "",
        agree: false
    });

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    }
    const [errors, setErrors] = React.useState({});
    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = handleValidate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert("Đã đăng ký thành công!");
            console.log(formData)
        }
    }

    function handleValidate() {
        const newErrors = {};

        if (!formData.childName.trim()) newErrors.childName = "Tên em bé không hợp lệ!";
        if (!formData.age || formData.age < 1) newErrors.age = "Tuổi em bé không hợp lệ!";
        if (!formData.parentName.trim()) newErrors.parentName = "Tên phụ huynh không hợp lệ!";
        if (!formData.address.trim()) newErrors.address = "Địa chỉ không hợp lệ!";
        if (!formData.giftType.trim()) newErrors.giftType = "Loại quà không hợp lệ!";
        return newErrors;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="childName" value={formData.childName} placeholder="Type child's name..." onChange={(e) => handleChange(e)}/>
                </div>
                <br />
                {errors.childName && (
                    <p style={{color: "red"}}>{errors.childName}</p>
                )}
                <div>
                    <label>
                        <input type="radio" name="gender" value="Nam" onChange={(e) => handleChange(e)} checked={formData.gender === "Nam"} />Nam
                    </label>
                    <label>
                        <input type="radio" name="gender" value="Nữ" onChange={(e) => handleChange(e)} checked={formData.gender === "Nữ"} />Nữ
                    </label>
                </div>
                <br />
                <div>
                    <input type="number" name="age" value={formData.age} placeholder="Type child's age..." onChange={(e) => handleChange(e)}/>
                </div>
                <br />
                {errors.age && (
                    <p style={{color: "red"}}>{errors.age}</p>
                )}
                <div>
                    <input type="text" name="parentName" value={formData.parentName} placeholder="Type parent's name..." onChange={(e) => handleChange(e)}/>
                </div>
                <br />
                {errors.parentName && (
                    <p style={{color: "red"}}>{errors.parentName}</p>
                )}
                <div>
                    <input type="text" name="address" value={formData.address} placeholder="Type the address..." onChange={(e) => handleChange(e)}/>
                </div>
                <br />
                {errors.address && (
                    <p style={{color: "red"}}>{errors.address}</p>
                )}
                <div>
                    <select name="giftType" id="giftType" value={formData.giftType} onChange={(e) => handleChange(e)}>
                        <option value="">Chọn quà</option>
                        <option value="Sách tô màu">Sách tô màu</option>
                        <option value="Ô tô đồ chơi">Ô tô đồ chơi</option>
                        <option value="Gấu bông">Gấu bông</option>
                    </select>
                </div>
                <br />
                {errors.giftType && (
                    <p style={{color: "red"}}>{errors.giftType}</p>
                )}
                <div>
                    <label>
                        <input type="checkbox" name="agree" onChange={(e) => handleChange(e)} checked={formData.agree} />Tích vào để đồng ý nhận quà
                    </label>
                </div>
                <button type="submit">Gửi</button>
            </form>
        </>
    )
}

export default Bai2;
