import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Contacts() {
    const [contacts, setContacts] = React.useState([]);
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts")
                setContacts(response.data);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        }
        fetchContacts();
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this contact?")) {
            try {
                await axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${id}`);
                setContacts(contacts.filter(contact => contact.id !== id));
            } catch (error) {
                console.error("Error deleting contact:", error);
            }
        }
    }
    return (
        <>
            <h1>Contacts List</h1>
            <Link to="/contacts/add"><button>Add Contact</button></Link>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td><img src={`${contact.img}`} alt="Avatar"/></td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td><Link to={`/contacts/${contact.id}`}><button>View</button></Link></td>
                        <td><Link to={`/contacts/edit/${contact.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Contacts;