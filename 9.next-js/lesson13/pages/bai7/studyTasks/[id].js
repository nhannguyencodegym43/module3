import Layout from "../layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function StudyTaskDetails () {
    const router = useRouter();
    const { id } = router.query;
    const [studyTask, setStudyTask] = useState(null);
    useEffect(() => {
        const savedStudyTasks = JSON.parse(localStorage.getItem("studyTasks") || "[]");
        const foundStudyTask = savedStudyTasks.find((studyTask) => studyTask.id.toString() === id);
        setStudyTask(foundStudyTask);
    }, [id])
    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai7/login");
    }
    if (!studyTask) return <Layout><p>Study Task loading or not found...</p></Layout>
    return (
        <>
            <Layout>
                <h2>{studyTask.title}</h2>
                <p>ID: {studyTask.id} - Status: {studyTask.status ? "Done" : "Not yet"}</p> <br/>
                <p>Notes: {studyTask.notes}</p>
                <button onClick={() => router.back()} style={{marginRight: "1rem"}}>Back</button>
                <button onClick={handleLogout}>Log out</button>
            </Layout>
        </>
    )
}