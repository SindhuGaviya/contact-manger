import React from 'react'
import { startRegister } from '../actions/UserAction'
import {connect} from 'react-redux'

class User extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
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
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
       const redirect=()=>{
           return this.props.history.push('/users/login')
       }
       this.props.dispatch(startRegister(formData,redirect))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChange}/><br/>
                <label>email</label>
                <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/><br/>
                <label>password</label>
                <input type='text' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/><br/>
                <input type='submit' value='register'/>
            </form>
        )
    }
}

export default connect()(User)