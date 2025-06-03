import React from "react";
function Bai2() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        rating: "",
        comment: "",
    })
    function handleChange(e){
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    function handleSubmit(e){
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.rating || !formData.comment) {
            alert("Please fill in all fields!");
        } else {
            alert("Send the comment successfully!");
            console.log(formData);
        }
    }
    return (
        <>
            <h1>Comment Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Tên người bình luận: </label>
                <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>

                <br/>
                <label>Email: </label>
                <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)}/>

                <br/>
                <label>Rating: </label>
                <input type="radio" name="rating" value="1" onChange={(e) => handleChange(e)}/>1
                <input type="radio" name="rating" value="2" onChange={(e) => handleChange(e)}/>2
                <input type="radio" name="rating" value="3" onChange={(e) => handleChange(e)}/>3
                <input type="radio" name="rating" value="4" onChange={(e) => handleChange(e)}/>4
                <input type="radio" name="rating" value="5" onChange={(e) => handleChange(e)}/>5
                <br/>
                <textarea name="comment" value={formData.comment} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai2;