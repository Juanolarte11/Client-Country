import axios from 'axios';
import { CLEAR_DETAIL, GET_ALL_COUNTRIES, GET_COUNTRIES_ID, GET_COUNTRIES_NAME } from './actions_types';

export const getAllCountries = () => {
    return async function (dispatch) {
        let response = await axios('http://localhost:3001/countries')
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: response.data,
        })
    }
}

export const getCountriesName = (name) => {
    return async function (dispatch) {
        return axios(`http://localhost:3001/countries?${name}`)
            .then(resp => resp.json())
            .then(res_json => {
                dispatch({ type: GET_COUNTRIES_NAME, payload: res_json })
            });
    }
}

export const getCountriesId = (id) => {
    return async function (dispatch) {
        let response = await axios(`http://localhost:3001/countries/${id}`)
        return dispatch({
            type: GET_COUNTRIES_ID,
            payload: response.data
        })
    }
}

export const clearDetail = () => {

    return {
        type: CLEAR_DETAIL
    }
}