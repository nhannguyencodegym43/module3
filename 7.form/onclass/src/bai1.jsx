import React from "react";
function Bai1() {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                       value={formData.username}
                       name="username"
                       placeholder="Type username"
                       onChange={(e) => handleChange(e)} />
                <input type="password"
                       value={formData.password}
                       name="password"
                       placeholder="Type password"
                       onChange={(e) => handleChange(e)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai1;
