import React from 'react'
import Contact from './Form'
import { startUpdateContacts } from '../../actions/ContactsAction'
import {connect} from 'react-redux'

function EditContacts(props){
    const handleSubmit=(formData)=>{
        const id=props.match.params.id
        const redirect=()=>{
            props.history.push('/contacts')
        }
          props.dispatch(startUpdateContacts(formData,id,redirect))
    }
    return(
        <div>
            <h1>Edit Contacts</h1>
           <Contact handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(EditContacts)