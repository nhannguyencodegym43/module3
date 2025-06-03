import React from "react";
function Bai10() {
    const [formData, setFormData] = React.useState({
        productId: "",
        rating: "",
        review: "",
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
        if ((!formData.productId) || (!formData.rating) || (!formData.review)) {
            let fillMessage = "Please fill all the fields!";
            newErrors.productId = fillMessage;
            newErrors.rating = fillMessage;
            newErrors.review = fillMessage;
        } else {
            if (formData.rating < 1 || formData.rating > 5) newErrors.rating = "Rating không hợp lệ!";
        }
        return newErrors;
    }
    return (
        <>
            <h1>Đánh giá sản phẩm</h1>
            <form onSubmit={handleSubmit}>
                <label>Mã sản phẩm: </label>
                <input type="text" value={formData.productId} name="productId" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.productId && (
                    <p style={{color: "red"}}>{errors.productId}</p>
                )}
                <label>Rating: </label>
                <input type="number" value={formData.rating} name="rating" onChange={(e) => handleChange(e)}/>
                <br/>
                {errors.rating && (
                    <p style={{color: "red"}}>{errors.rating}</p>
                )}
                <textarea name="review" value={formData.review} onChange={(e) => handleChange(e)} cols="30" rows="10"></textarea>
                <br/>
                {errors.review && (
                    <p style={{color: "red"}}>{errors.review}</p>
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai10;