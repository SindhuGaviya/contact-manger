import React from 'react'
import {  startLogin } from '../actions/UserAction'
import {connect} from 'react-redux'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
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
            email:this.state.email,
            password:this.state.password
        }
      const redirect=()=>{
          return this.props.history.push('/users/account')
      }
      this.props.dispatch(startLogin(formData,redirect))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>email</label>
                <input type='text' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/><br/>
                <label>password</label>
                <input type='text' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange}/><br/>
                <input type='submit' value='login'/>
            </form>
        )
    }
}

export default connect()(Login)