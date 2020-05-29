import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.contacts?this.props.contacts.name:'',
            email:this.props.contacts?this.props.contacts.email:'',
            mobile:this.props.contacts?this.props.contacts.mobile:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        this.props.handleSubmit(formData)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' name='name' placeholder='name' value={this.state.name} onChange={this.handleChange}/><br/>
                <label>email</label>
                <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/><br/>
                <label>mobile</label>
                <input type='number' name='mobile' placeholder='mobile' value={this.state.mobile} onChange={this.handleChange}/><br/>
                <input type='submit' value='ADD CONTACT'/>
            </form>
        )
    }
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
       contacts:state.contacts.find(note=>note._id==id)
    }
}

export default withRouter(connect(mapStateToProps)(Contact))