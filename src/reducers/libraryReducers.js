import { LIBRARY_ADD_ITEM , LIBRARY_REMOVE_ITEM} from '../constants/libraryConstants'





export const libraryReducer = (state = {libraryItems:[]}, action) =>{
    switch(action.type){
        case LIBRARY_ADD_ITEM:
            const item = action.payload
            const existItem = state.libraryItems.find(x => x.book === item.book)//this will return item if found

            if(existItem){
                return{
                    ...state, //if book matches the book we found we replace, if not return original
                    libraryItems: state.libraryItems.map(x => 
                            x.book === existItem.book ? item : x)
                }

            }else{
                // if book does not exist it will return original
                return {
                    ...state,
                    libraryItems:[...state.libraryItems, item]
                }
            }
        
        case LIBRARY_REMOVE_ITEM:
            return{
                ...state, //get current state and filter. will return new array 
                libraryItems: state.libraryItems.filter(x => x.book !== action.payload)
            }
    default:
        return state
    }

}