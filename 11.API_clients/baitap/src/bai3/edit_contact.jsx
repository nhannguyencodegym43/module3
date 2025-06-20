import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditContact() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = React.useState({
        name: "",
        image: "",
        email: "",
        phone: ""
    });
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
    return (
        <>
            <h2>Edit Contact</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                try {
                    await axios.patch(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`, {
                        ...contact
                    });
                    navigate("/contacts");
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            }}>
                <label>
                    Name:
                    <input type="text" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} />
                </label>
                <br/>
                <label>
                    Image URL:
                    <input type="text" value={contact.image} onChange={(e) => setContact({...contact, image: e.target.value})} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} />
                </label>
                <br/>
                <label>
                    Phone:
                    <input type="tel" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})} />
                </label>
                <br/>
                <button type="submit">Update Contact</button>
            </form>
        </>
    )
}
export default EditContact;