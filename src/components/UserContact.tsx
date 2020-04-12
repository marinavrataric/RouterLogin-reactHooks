import React from 'react'
import FetchUrl from './FetchUrl'

function UserContact() {

    const fetchedContacts = FetchUrl('https://jsonplaceholder.typicode.com/users')
    const contacts = fetchedContacts.data.map((contact: {
        name: string,
        email: string,
        phone: string,
        address: { street: string, suite: string, city: string }
    }) => {
        return (
            <tr>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.address.street}, {contact.address.suite}, {contact.address.city}</td>
            </tr>)
    })


    return (
        <div className="usercontacts">
            <h1 className="title">User Contacts</h1>
            {fetchedContacts.isLoading && <h3>Loading...</h3>}
            <table>
                <thead>
                    <tr className="row">
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {contacts}
                </tbody>
            </table>
        </div>
    )
}

export default UserContact