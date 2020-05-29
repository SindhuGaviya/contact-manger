import axios from 'axios'

export const setUser=(user)=>{
    return{type:'SET_USER',payload:user}
}

export const startLogin=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3001/users/login',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('error')){
                alert(response.data.error)
            }
            else{
                alert('successfully logged in')
                console.log(response.data)
          localStorage.setItem('authToken',response.data)
          console.log(response.data)
          axios.get('http://localhost:3001/users/account',{
             
              headers:{
                  'x-auth':localStorage.getItem('authToken')
              }
          })
         .then((response)=>{
             const user=response.data
             console.log(user)
             dispatch(setUser(user))
             redirect()
         })
         .catch((err)=>{
             alert(err)
         })
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const startRegister=(formData,redirect)=>{
    return(dispatch)=>{
       axios.post('http://localhost:3001/users/register',formData)
       .then((response)=>{
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }
        else{
            alert('you have succefully registered')
            redirect()
        }
       })
       .catch((err)=>{
           console.log(err)
       })
    }
}

export const startLogout=()=>{
    return(dispatch)=>{
        axios.delete('http://localhost:3001/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href="/"
            }
        })
    }
}