import {GET_COUNTRIES_ID, GET_COUNTRIES_NAME, GET_ALL_COUNTRIES, CLEAR_DETAIL} from './actions_types'

const initialState = {
    countries: [],
    countriesId: {},
}
const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES: 
        return{
            ...state,
            countries: action.payload
        }
        case GET_COUNTRIES_NAME: 
        return{
            ...state,
            countries: action.payload
        }
        case GET_COUNTRIES_ID: 
        return{
            ...state,
            countriesId: action.payload
        }
        case CLEAR_DETAIL: 
        return{
            ...state,
            countriesId:{},
        }
        default:
            return{
                ...state,
            }
    }
}

export default reducer;