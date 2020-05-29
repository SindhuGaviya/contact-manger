import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import contactsReducer from '../reducers/contactsReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer,
        contacts:contactsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore