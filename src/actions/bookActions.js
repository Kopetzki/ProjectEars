import axios from 'axios'
import { 
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_LIST_FAIL,

    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_DETAILS_FAIL
 } from '../constants/bookConstants'

 /* this function will be in charge of replacing API call
 in screens, will be made in this action*/
 
 export const listBooks = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: BOOK_LIST_REQUEST }) /*this will fire off reducer*/

        const { data } = await axios.get(`/api/books${keyword}`) /*api call*/

        dispatch({
            type: BOOK_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listBookDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BOOK_DETAILS_REQUEST }) /*this will fire off reducer*/

        const { data } = await axios.get(`/api/books/${id}`) /*api call*/

        dispatch({
            type: BOOK_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOK_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
