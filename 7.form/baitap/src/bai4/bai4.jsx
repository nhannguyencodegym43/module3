import React from "react";

function Bai4() {
    const [formData, setFormData] = React.useState({
        username: "",
        cmnd: "",
        yob: "",
        gender: "",
        nationality: "",
        company: "",
        role: "",
        bhyt: false,
        province: "",
        district: "",
        ward: "",
        address: "",
        phone: "",
        email: "",
        travel_tracing: "",
        symptoms: [],
        meetWho: []
    })

    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        if (type === "checkbox" && name === "symptoms") {
            const updatedSymptoms = checked ? [value, ...formData.symptoms] : formData.symptoms.filter(item => item !== value);
            setFormData(prev => ({...prev, symptoms: updatedSymptoms}));
        } else if (type === "checkbox" && name === "meetWho") {
            const updatedMeetWho = checked ? [value, ...formData.meetWho] : formData.meetWho.filter(item => item !== value);
            setFormData(prev => ({...prev, meetWho: updatedMeetWho}));
        } else if (type === "checkbox" && name === "bhyt") {
            setFormData(prev => ({...prev, [name]: checked}));
        } else {
            setFormData(prev => ({...prev, [name]: value}));
        }
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
        const regexEmail = /^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if ((!formData.username) || (!formData.cmnd) || (!formData.yob) || !formData.nationality || !formData.province || !formData.district || !formData.ward || !formData.address || !formData.phone || !formData.email) {
            let fillMessage = "Please fill all needed fields!";
            newErrors.username = fillMessage;
            newErrors.cmnd = fillMessage;
            newErrors.yob = fillMessage;
            newErrors.nationality = fillMessage;
            newErrors.province = fillMessage;
            newErrors.district = fillMessage;
            newErrors.ward = fillMessage;
            newErrors.address = fillMessage;
            newErrors.phone = fillMessage;
            newErrors.email = fillMessage;
        } else {
            if (formData.yob < 1900 || formData.yob > new Date().getFullYear()) newErrors.yob = "Please enter a valid year of birth";
            if (!regexEmail.test(formData.email)) newErrors.email = "Please enter a valid email";
        }
        return newErrors;
    }

    const symptomsList = ["Sốt", "Ho khan", "Khó thở", "Viêm phổi", "Đau họng", "Mệt mỏi"];
    const meetWhoList = ["Người bệnh COVID-19", "Người nghi ngờ mắc COVID-19", "Người tiếp xúc gần với người bệnh COVID-19", "Người tiếp xúc gần với người nghi ngờ mắc COVID-19"];
    return (
        <>
            <h1>Tờ khai y tế</h1>
            <form onSubmit={handleSubmit}>
                <label>Họ và tên: </label>
                <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.username && (
                    <p style={{color: "red"}}>{errors.username}</p>
                )}
                <label>Số CMND/CCCD: </label>
                <input type="text" value={formData.cmnd} name="cmnd" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.cmnd && (
                    <p style={{color: "red"}}>{errors.cmnd}</p>
                )}
                <label>Năm sinh: </label>
                <input type="number" value={formData.yob} name="yob" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.yob && (
                    <p style={{color: "red"}}>{errors.yob}</p>
                )}
                <label>Giới tính: </label>
                <input type="radio" name="gender" value="Nam" checked={formData.gender === "Nam"}
                       onChange={(e) => handleChange(e)}/> Nam
                <input type="radio" name="gender" value="Nữ" checked={formData.gender === "Nữ"}
                       onChange={(e) => handleChange(e)}/> Nữ
                <input type="radio" name="gender" value="Khác" checked={formData.gender === "Khác"}
                       onChange={(e) => handleChange(e)}/> Khác
                <br/>
                <label>Quốc tịch: </label>
                <input type="text" name="nationality" value={formData.nationality} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.nationality && (
                    <p style={{color: "red"}}>{errors.nationality}</p>
                )}
                <label>Công ty: </label>
                <input type="text" name="company" value={formData.company} onChange={(e) => handleChange(e)}/>
                <br/>
                <label>Chức vụ: </label>
                <input type="text" name="role" value={formData.role} onChange={(e) => handleChange(e)}/>
                <br/>
                <input type="checkbox" name="bhyt" checked={formData.bhyt} onChange={(e) => handleChange(e)}/> Có thẻ
                BHYT
                <br/>
                <h2>Địa chỉ liêc lạc tại Việt Nam</h2>
                <label>Tỉnh/Thành phố: </label>
                <input type="text" name="province" value={formData.province} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.province && (
                    <p style={{color: "red"}}>{errors.province}</p>
                )}
                <label>Quận/Huyện: </label>
                <input type="text" name="district" value={formData.district} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.district && (
                    <p style={{color: "red"}}>{errors.district}</p>
                )}
                <label>Xã/Phường: </label>
                <input type="text" name="ward" value={formData.ward} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.ward && (
                    <p style={{color: "red"}}>{errors.ward}</p>
                )}
                <label>Địa chỉ cụ thể: </label>
                <input type="text" name="address" value={formData.address} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.address && (
                    <p style={{color: "red"}}>{errors.address}</p>
                )}
                <label>Số điện thoại: </label>
                <input type="text" name="phone" value={formData.phone} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.phone && (
                    <p style={{color: "red"}}>{errors.phone}</p>
                )}
                <label>Email: </label>
                <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.email && (
                    <p style={{color: "red"}}>{errors.email}</p>
                )}
                <h2>Thông tin dịch tễ</h2>
                <label>Đi lịch sử di chuyển trong vòng 14 ngày qua: </label>
                <textarea name="travel_tracing" value={formData.travel_tracing} onChange={(e) => handleChange(e)}
                          cols="30" rows="10"></textarea>
                <br/>
                <label>Triệu chứng: </label>
                {symptomsList.map((symptom, index) => (
                    <label key={index} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <input type="checkbox" name="symptoms" value={symptom}
                               checked={formData.symptoms.includes(symptom)}
                               onChange={(e) => handleChange(e)}/>{symptom}
                    </label>
                ))}
                <br/>
                <label>Lịch sử tiếp xúc: </label>
                {meetWhoList.map((who, index) => (
                    <label key={index} style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <input type="checkbox" name="meetWho" value={who}
                               checked={formData.meetWho.includes(who)}
                               onChange={(e) => handleChange(e)}/>{who}
                    </label>
                ))}
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Bai4;