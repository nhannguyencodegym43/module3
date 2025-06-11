import {useState} from "react";

export default function AddStudyTask({setStudyTasks, studyTasks}) {
    const [formData, setFormData] = useState({
        title: "",
        status: "",
        notes: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const studyTaskStatus = formData.status === "Hoàn thành";
        const maxId = studyTasks.length > 0 ? Math.max(...studyTasks.map(t => t.id)) : 0;
        const newStudyTask = {
            id: maxId + 1,
            title: formData.title,
            status: studyTaskStatus,
            notes: formData.notes,
        }
        setStudyTasks([newStudyTask, ...studyTasks]);
        localStorage.setItem("studyTasks", JSON.stringify([newStudyTask, ...studyTasks]));
        setFormData({title: "", status: "", notes: ""});
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Study Task title" value={formData.title}
                       onChange={(e) => handleChange(e)}/>
                <br/>
                <select name="status" onChange={handleChange} value={formData.status}>
                    <option value="">Trạng thái hoàn thành</option>
                    <option value="Hoàn thành">Hoàn thành</option>
                    <option value="Chưa hoàn thành">Chưa hoàn thành</option>
                </select> <br/>
                <textarea name="notes" cols="30" rows="10" value={formData.notes}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}