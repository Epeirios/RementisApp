export const GET_AGENDA_FORM = 'GET_AGENDA_FORM';
export const SET_AGENDA_FORM = 'SET_AGENDA_FORM';
export const CLEAR_AGENDA_FORM = 'CLEAR_AGENDA_FORM';

export const SET_AGENDA_FORM_TITLE = 'SET_AGENDA_FORM_TITLE';
export const SET_AGENDA_FORM_DESCRIPTION = 'SET_AGENDA_FORM_DESCRIPTION';
export const SET_AGENDA_FORM_STARTTIME = 'SET_AGENDA_FORM_STARTTIME';
export const SET_AGENDA_FORM_ENDTIME = 'SET_AGENDA_FORM_ENDTIME';
export const SET_AGENDA_FORM_DATE = 'SET_AGENDA_FORM_DATE';
export const TOGGLE_AGENDA_FORM_IMPORTANT = 'TOGGLE_AGENDA_FORM_IMPORTANT';


export const getAgendaForm = () => ({
    type: GET_AGENDA_FORM,
});

export const setAgendaForm = params => ({
    type: SET_AGENDA_FORM,
    params
});

export const clearAgendaForm = () => ({
    type: CLEAR_AGENDA_FORM,
});

export const setAgendaFormTitle = params => ({
    type: SET_AGENDA_FORM_TITLE,
    params
});

export const setAgendaFormDescription = params => ({
    type: SET_AGENDA_FORM_DESCRIPTION,
    params
});

export const setAgendaFormStartTime = params => ({
    type: SET_AGENDA_FORM_STARTTIME,
    params
});

export const setAgendaFormEndTime = params => ({
    type: SET_AGENDA_FORM_ENDTIME,
    params
});

export const setAgendaFormDate = params => ({
    type: SET_AGENDA_FORM_DATE,
    params
});

export const toggleAgendaFormImportant = () => ({
    type: TOGGLE_AGENDA_FORM_IMPORTANT,
});