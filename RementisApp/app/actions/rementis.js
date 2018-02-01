export const GET_PROFILE_DATA = 'GET_PROFILE_DATA';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const PROFILE_DATA = 'PROFILE_DATA';
export const GET_PROFILE_DATA_ERROR = 'GET_PROFILE_DATA_ERROR';

export const getProfileData = () => ({
    type: GET_PROFILE_DATA,
});

export const updateProfile = () => ({
    type: UPDATE_PROFILE,
});
