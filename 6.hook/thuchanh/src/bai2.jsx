import React, {useEffect} from "react";
function Bai2() {
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState(false);
    useEffect(() => {
        setMessage(true);
        return () => setMessage(false);
    }, [subject]);
    function handleSubChange(newSubject) {
        setSubject(newSubject);
    }
    return (
        <>
            <label htmlFor="subjects">Khóa học: </label>
            <select name="subjects" id="subjects" onChange={(e) => handleSubChange(e.target.value)}>
                <option value={null}>Mời chọn</option>
                <option value="javascript">Javascript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
            </select>
            {message && (
                <h2>You selected: {subject}</h2>
            )}
        </>
    )
}
export default Bai2;