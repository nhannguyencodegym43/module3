import {useState} from "react";

export default function AddContact({setContacts, contacts}) {
    const [contactId, setContactId] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-z0-9]{2,}$/
        if (!emailRegex.test(formData.email)) {
            alert("Please enter valid email!");
        }
        const newContact = {
            id: contactId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
        }
        setContacts([newContact, ...contacts]);
        localStorage.setItem("contacts", JSON.stringify([newContact, ...contacts]));
        setContactId(prev => prev + 1);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Contact name" value={formData.name}
                       onChange={(e) => handleChange(e)}/>
                <input type="email" name="email" placeholder="Contact email" value={formData.email}
                       onChange={(e) => handleChange(e)}/>
                <input type="text" name="phone" placeholder="Contact phone" value={formData.phone}
                       onChange={(e) => handleChange(e)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}