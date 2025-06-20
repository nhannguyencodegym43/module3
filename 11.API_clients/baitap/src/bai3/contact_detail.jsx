import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function ContactDetail() {
    const [contact, setContact] = React.useState({
        id: "",
        name: "",
        img: "",
        email: "",
        phone: ""
    });
    const {id} = useParams();
    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`);
                setContact(response.data);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        }
        fetchContact();
    }, [id]);
    if (!contact) {
        return <div>Loading...</div>;
    }
    const navigate = useNavigate();
    return (
        <>
            <h2>Contact Detail</h2>
            <div>
                <p>ID: {contact.id}</p>
                <p>Name: {contact.name}</p>
                <img src={contact.img} alt="Avatar" style={{width: "100px", height: "100px"}}/>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button onClick={() => navigate("/contacts")}>Back to Contacts</button>
            </div>
        </>
    )
}
export default ContactDetail;