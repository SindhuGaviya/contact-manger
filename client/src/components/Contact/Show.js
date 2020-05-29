import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function ContactsShow(props){
    const {_id,name,mobile}=props.contacts || {}
    return(
        <div>
            <h1>Notes Show-{_id}</h1>
            <p>{name}</p>
            <p>{mobile}</p>
            <Link to={`/contacts/edit/${_id}`}>edit</Link>
            <Link to='/contacts'>back</Link>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        contacts:state.contacts.find(note=>note._id==id)
    }
}

export default connect(mapStateToProps)(ContactsShow)