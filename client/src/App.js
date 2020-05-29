import React from 'react'
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from './actions/UserAction'
import User from './components/User'
import Login from './components/Login'
import Account from './components/Account'
import ContactsList from './components/Contact/List'
import  AddContacts  from './components/Contact/Add'
import EditContacts from './components/Contact/Edit'
import ContactsShow from './components/Contact/Show'

function App(props){
    const handleLogout=()=>{
        props.dispatch(startLogout())
    }
    return(
        <BrowserRouter>
            <h1>Contacts Manager</h1>
            {
                    Object.keys(props.users).length !== 0 ? (
                        <div>
                            <Link to="/users/account">Account</Link>
                            <Link to='/contacts'>Contacts</Link> 
                            <Link to="#" onClick={handleLogout}>Logout</Link>
                        </div>
                    ) : (
                            <div>
                                <Link to="/users/register">Register</Link>
                                <Link to="/users/login">Login</Link>
                               
                            </div>
                        )
                }
            <Switch>
            <Route path='/users/register' component={User}/>
            <Route path='/users/login' component={Login}/>
            <Route path='/users/account' component={Account}/>
            <Route path='/contacts' component={ContactsList} exact={true}/>
            <Route path='/contacts/new' component={AddContacts}/>
            <Route path='/contacts/edit/:id' component={EditContacts}/>
            <Route path='/contacts/:id' component={ContactsShow}/>
            </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps=(state)=>{
    return{
       users:state.users
    }
  }

export default connect(mapStateToProps)(App)