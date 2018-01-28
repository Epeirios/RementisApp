export const GET_SELECTED = "GET_SELECTED";
export const SET_SELECTED_PATIENT = "SET_SELECTED_PATIENT";
export const SET_SELECTED_MESSAGE = "SET_SELECTED_MESSAGE";

export const getSelected = () => ({
  type: GET_SELECTED
});

export const setSelectedPatient = patient => ({
  type: SET_SELECTED_PATIENT,
  patient
});

export const setSelectedMessage = message => ({
  type: SET_SELECTED_MESSAGE,
  message
});
