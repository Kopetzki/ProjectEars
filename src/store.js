import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { bookListReducer, bookDetailsReducer } from './reducers/bookReducers'
import { libraryReducer } from './reducers/libraryReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer} from './reducers/usersReducers'
/*will trigger first reducer and set books to initial state8*/

const reducer = combineReducers({
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
    library: libraryReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

})
//we us this function to grab data from local storage and add to initial state
const libraryItemsFromStorage = localStorage.getItem('libraryItems') ?
        JSON.parse(localStorage.getItem('libraryItems')) :[]

const userInfoFromStorage = localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    library: { libraryItems: libraryItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = 
    createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
