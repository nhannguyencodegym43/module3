import React from "react";
function Bai3() {
    const [formData, setFormData] = React.useState({
        email: "",
        title: "",
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
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
        if ((!formData.email) || (!formData.title) || (!formData.message)) {
            let fillMessage = "Please fill all needed fields!";
            newErrors.email = fillMessage;
            newErrors.title = fillMessage;
            newErrors.message = fillMessage;
        } else {
            if (!regexEmail.test(formData.email)) newErrors.email = "Please enter a valid email";
        }
        return newErrors;
    }
    return (
        <>
            <h1>Mail form</h1>
            <form onSubmit={handleSubmit}>
                <label>To: </label>
                <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.email && (
                    <p style={{color: "red"}}>{errors.email}</p>
                )}
                <label>Title: </label>
                <input type="text" value={formData.title} name="title" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.title && (
                    <p style={{color: "red"}}>{errors.title}</p>
                )}
                <textarea name="message" value={formData.message} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
                <br/>
                {errors.message && (
                    <p style={{color: "red"}}>{errors.message}</p>
                )}
                <input type="file" name="file" onChange={(e) => handleChange(e)}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai3;