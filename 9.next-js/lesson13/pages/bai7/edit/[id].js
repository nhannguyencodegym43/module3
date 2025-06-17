import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Edit () {
    const router = useRouter();
    const {id} = router.query;
    const [studyTask, setStudyTask] = useState({
        title: "",
        status: "",
        notes: ""
    });
    useEffect(() => {
        if (id !== undefined) {
            const studyTasks = JSON.parse(localStorage.getItem("studyTasks") || "[]");
            const foundTask = studyTasks.find(task => task.id.toString() === id);
            if (foundTask) {
                setStudyTask({...foundTask, status: foundTask.status === true ? "Hoàn thành" : "Chưa hoàn thành"});
            }
        }
    }, [id]);
    function handleChange(e) {
        const {name, value} = e.target;
        setStudyTask({...studyTask, [name]: value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        const studyTasks = JSON.parse(localStorage.getItem("studyTasks") || "[]");
        const idx = studyTasks.findIndex(task => task.id.toString() === id);
        if (idx !== -1) {
            const statusBool = studyTask.status === "Hoàn thành";
            studyTasks[idx] = {...studyTask, status: statusBool};
            localStorage.setItem("studyTasks", JSON.stringify(studyTasks));
        }
        router.push("/bai7/study_tasks");
    }
    if (!studyTask || !studyTask.id) return <p>Study task not found...</p>
    return (
        <>
            <h2>Edit the study task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Study Task title" value={studyTask.title}
                       onChange={(e) => handleChange(e)}/>
                <br/>
                <select name="status" onChange={handleChange} value={studyTask.status}>
                    <option value="">Trạng thái hoàn thành</option>
                    <option value="Hoàn thành">Hoàn thành</option>
                    <option value="Chưa hoàn thành">Chưa hoàn thành</option>
                </select> <br/>
                <textarea name="notes" cols="30" rows="10" value={studyTask.notes}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}