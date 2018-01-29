import {
  GET_SELECTED,
  SET_SELECTED_MESSAGE,
  SET_SELECTED_PATIENT,
  SET_SELECTED_DATE
} from "../actions/selects";

function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = mm + "/" + dd + "/" + yy;

  return today;
}

const initialState = {
  patientSelected: -1,
  messageSelected: -1,
  dateSelected: getCurrentDate()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED:
      return {
        ...state
      };
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
    case SET_SELECTED_DATE:
      return {
        ...state,
        dateSelected: action.date
      };
    default:
      return state;
  }
};
