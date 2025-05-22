import React, {useState} from "react";
function Bai25({showRegistrations}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    function handleRegistrations(e) {
        e.preventDefault();
        showRegistrations({name, email, job});
    }
    return (
        <>
            <form onSubmit={handleRegistrations}>
                <input type="text" placeholder="Enter the name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Enter the email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Enter the job" value={job} onChange={(e) => setJob(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai25;