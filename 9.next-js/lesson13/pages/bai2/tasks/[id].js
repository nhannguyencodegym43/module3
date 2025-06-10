import Layout from "../layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function TaskDetails () {
    const router = useRouter();
    const { id } = router.query;
    const [task, setTask] = useState(null);
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const foundTask = savedTasks.find((task) => task.id.toString() === id);
        setTask(foundTask);
    }, [id])
    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai2/login");
    }
    if (!task) return <Layout><p>Task loading or not found...</p></Layout>
    return (
        <>
            <Layout>
                <h2>{task.title}</h2>
                <p>ID: {task.id} - Status: {task.status ? "Done" : "Not yet"}</p>
                <button onClick={() => router.back()}>Back</button>
                <button onClick={handleLogout}>Log out</button>
            </Layout>
        </>
    )
}