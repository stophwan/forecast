import axios from 'axios'

const API_URL = "http://api.openweathermap.org/data/2.5/forecast"
const API_KEY = "8c466c7dc940457d281f644b65693b4f"

export function addCity(name){
    return (dispatch) =>{
        dispatch({type: 'START_LOADING'});
        dispatch({type: 'CLEAR_ERRORS'});
        axios.get(API_URL,{params:{
            q: name,
            appid: API_KEY,
            units: 'metric'
        }}).then(({data}) => {
            dispatch({
                type: 'ADD_CITY', 
                payload: data
            });
        }).catch((error) => {
            dispatch({
                type:'ERROR',
                payload: error.response.data
            })
        }).then(()=> {
            dispatch({type: 'END_LOADING'});
        })
    }
}