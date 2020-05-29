import axios from 'axios'


export const setContacts=(contacts)=>{
    return {type:'SET_CONTACTS',payload:contacts}
}

export const startSetContacts=()=>{
    return(dispatch)=>{
        axios.get('http://localhost:3001/contacts',{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contacts=response.data
            dispatch(setContacts(contacts))
        })
    }
}

export const addContacts=(contacts)=>{
    return {type:'ADD_CONTACTS', payload:contacts}
}

export const startAddContacts=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3001/contacts',formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contacts=response.data
            dispatch(addContacts(contacts))
            redirect()
        })
    }
}

export const removeContacts=(contacts)=>{
    return {type:'REMOVE_CONTACTS',payload:contacts}
}

export const startRemoveContacts=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3001/contacts/${id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contacts=response.data
            dispatch(removeContacts(contacts._id))
        })
    }
}

export const updateContacts=(contacts)=>{
    return {type:'UPDATE_CONTACTS',payload:contacts}
}

export const startUpdateContacts=(formData,id,redirect)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3001/contacts/${id}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const contacts=response.data
            dispatch(updateContacts(contacts))
            redirect()
        })
    }
}