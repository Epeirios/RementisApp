import {
  GET_AGENDA_FORM,
  SET_AGENDA_FORM,
  CLEAR_AGENDA_FORM,
  SET_AGENDA_FORM_TITLE,
  SET_AGENDA_FORM_DESCRIPTION,
  SET_AGENDA_FORM_STARTTIME,
  SET_AGENDA_FORM_ENDTIME,
  TOGGLE_AGENDA_FORM_IMPORTANT
} from "../actions/agendaForm";

const initialState = {
  title: "",
  description: "",
  startDate: "1991-01-01T00:00:00",
  endDate: "1991-01-01T00:00:00",
  startTime: "00:00:00",
  endTime: "00:00:00",
  priority: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AGENDA_FORM:
      return {
        ...state
      };
    case SET_AGENDA_FORM:
      return {
        ...action.params
      };
    case CLEAR_AGENDA_FORM:
      return {
        ...initialState
      };
    case SET_AGENDA_FORM_TITLE:
      return {
        ...state,
        title: action.params
      };
    case SET_AGENDA_FORM_DESCRIPTION:
      return {        
        ...state,
        description: action.params
      };
    case SET_AGENDA_FORM_STARTTIME:
      return {        
        ...state,
        startTime: action.params
      };
    case SET_AGENDA_FORM_ENDTIME:
      return {
        ...state,
        endTime: action.params
      };
    case TOGGLE_AGENDA_FORM_IMPORTANT:
      return {
        ...state,
        priority: !state.priority
      };
    default:
      return state;
  }
};
