import { GET_SELECTED, SET_SELECTED_MESSAGE, SET_SELECTED_PATIENT } from "../actions/selects";

const initialState = {
    patientSelected: -1,
    messageSelected: -1
};

export default (state = initialState, action) => {
    switch(action.type){
        case GET_SELECTED:
            return{
                ...state
            }
        case SET_SELECTED_PATIENT:
            return {
                ...state,
                patientSelected: action.patient
            };
        case SET_SELECTED_MESSAGE:
            return {
                ...state,
                messageSelected: action.message
            };
        default: 
            return state;
    }
};