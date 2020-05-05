import produce from 'immer';


const initialState = {
    cities: [],
    error: null,
    loading : false
}; 
const reducer = produce((state,action)=>{
    //console.log(action);
    switch(action.type){
        case 'ADD_CITY':
            state.cities.push(action.payload);
            break;
        case 'ERROR':
            state.error = action.payload;
            break;
        case 'CLEAR_ERRORS':
            state.error = null;
            break;
        case 'START_LOADING':
            state.loading = true;
            break;
        case 'END_LOADING':
            state.loading = false;
            break;
        default:
            break;
    }
}, initialState)

export default reducer;