import { types } from "../types/types";
const initialState = {
    searchList: [],
}

export const listReducer = ( state = initialState, action ) =>{
    switch (action.type) {

        case types.getDogsBreeds:
            return {
                ...state,
                optionsList: action.payload.optionsList,
            }
        case types.fillList:
            return {
                ...state,
                searchList: [...state.searchList, action.payload.breedImages]
            } 
        
        case types.removeFilterItem:
            return {
                ...state,
                searchList: state.searchList.filter(item => item.breed !== action.payload.removeItem)
            }
    
        default:
            return state;
    }
}
