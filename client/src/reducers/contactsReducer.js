const contactsInitialState=[]

const contactsReducer=(state=contactsInitialState,action)=>{
    switch(action.type){
        case 'ADD_CONTACTS':{
            return [...state,action.payload]
        }
        case 'REMOVE_CONTACTS':{
            return state.filter(contacts=>contacts._id!=action.payload)
        }
        case 'SET_CONTACTS':{
            return [...action.payload]
        }
        case 'UPDATE_CONTACTS':{
            return state.map(contacts=>{
                if(contacts._id==action.payload._id){
                    return {...contacts,...action.payload}
                }else{
                    return {...contacts}
                }
            })
        }
        default:{
            return state
        }
    }
}

export default contactsReducer