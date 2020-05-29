import React from 'react'
import {connect} from 'react-redux'
import { startSetContacts, startRemoveContacts } from '../../actions/ContactsAction'
import {Link} from 'react-router-dom'

function ContactsList(props){
    const handleRemove=(id)=>{
         const confirmRemove=window.confirm('Are you Sure?')
         if(confirmRemove){
             props.dispatch(startRemoveContacts(id))
         }
    }
    if(props.contacts.length==0){
        props.dispatch(startSetContacts())
    }
    return(
        <div>
            <h1>Contacts List-{props.contacts.length}</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts.map((contact,i)=>{
                        return(
                            <tr key={contact._id}>
                                <td>{i+1}</td>
                                <td><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></td>
                                <td>{contact.email}</td>
                                <td>{contact.mobile}</td>
                                <td>
                                <button  onClick={()=>{handleRemove(contact._id)}}>remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to='/contacts/new'>Add Contacts</Link>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
       contacts:state.contacts
    }
}

export default connect(mapStateToProps)(ContactsList)