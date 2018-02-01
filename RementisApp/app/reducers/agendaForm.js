import moment from "moment";

import {
  GET_AGENDA_FORM,
  SET_AGENDA_FORM,
  CLEAR_AGENDA_FORM,
  SET_AGENDA_FORM_TITLE,
  SET_AGENDA_FORM_DESCRIPTION,
  SET_AGENDA_FORM_STARTTIME,
  SET_AGENDA_FORM_ENDTIME,
  SET_AGENDA_FORM_DATE,
  TOGGLE_AGENDA_FORM_IMPORTANT
} from "../actions/agendaForm";

let currentDate = moment().format();
currentDate = currentDate.replace("/", "-").replace("/", "-").substring(0,19);

const initialState = {
  title: "",
  description: "",
  startDate: currentDate,
  endDate: currentDate,
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
    case SET_AGENDA_FORM_DATE:
      return {
        ...state,
        startDate: action.params,
        endDate: action.params
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
