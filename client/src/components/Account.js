import React from 'react'
import { connect } from 'react-redux'


function Account(props){
    return(
        <div>
            {/* <h1>User Info</h1> */}
            <h2>{props.users.username}</h2>
            <h2>{props.users.email}</h2>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}

export default connect(mapStateToProps)(Account)