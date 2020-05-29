import React from 'react'
import Contact from './Form'
import { startAddContacts } from '../../actions/ContactsAction'
import {connect} from 'react-redux'

function AddContacts(props){
    const handleSubmit=(formData)=>{
        const redirect=()=>{
            props.history.push('/contacts')
        }
          props.dispatch(startAddContacts(formData,redirect))
    }
    return(
        <div>
            <h1>Add contacts</h1>
           <Contact handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(AddContacts)