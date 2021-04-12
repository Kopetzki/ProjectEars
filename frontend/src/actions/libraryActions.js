import axios from 'axios'
import { LIBRARY_ADD_ITEM } from '../constants/libraryConstants'

export const addToLibrary = (id) => async(dispatch, getState) => {
    const {data} = await axios.get(`/api/books/${id}`)

    dispatch({
        type: LIBRARY_ADD_ITEM,
        payload:{
            book: data._id,
            name: data.name,
            image: data.image,



        }
    })
    //this will store data locally so books stay in library even when user leaves and returns w/ signing in 
    localStorage.setItem('libraryItems', JSON.stringify(getState().library.libraryItems))


}