import {
  GET_PROFILE_DATA,
  GET_PROFILE_DATA_ERROR,
  PROFILE_DATA,
  UPDATE_PROFILE
} from "../actions/rementis";

import { agendaPointStatesEnum } from "../enums";

const temp = {
  error: "noError",
  isFetching: false,
  profiles: [
    {
      customerId: 1,
      firstName: "Herbert",
      lastName: "Kartoffelsalat",
      gender: "male",
      agenda: [
        {
          date: "01/29/2018",
          items: [
            {
              messageId: 1,
              title: "Medicatie innemen",
              description: "Neem 5 paracetamol en 2 ibuprofen",
              startTime: "11:00",
              endTime: "12:00",
              priority: true,
              state: agendaPointStatesEnum.completed
            },
            {
              messageId: 2,
              title: "truus bellen",
              description: "bridge kampioenschap",
              startTime: "14:00",
              endTime: "14:00",
              priority: false,
              state: agendaPointStatesEnum.failed
            }
          ]
        },
        {
          date: "01/28/2018",
          items: [
            {
              messageId: 3,
              title: "Medicatie innemen",
              description: "Neem 5 paracetamol en 2 ibuprofen",
              startTime: "11:00",
              endTime: "12:00",
              priority: true,
              state: agendaPointStatesEnum.pending
            }
          ]
        }
      ]
    }
  ]
};

const initialState = {
  error: "noError",
  isFetching: false,
  profiles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
      };
    case GET_PROFILE_DATA_ERROR:
      return {
        ...state,
        error: action.error
      };
    case PROFILE_DATA:
      return {
        ...state,
        profiles: action.result.profile,
        isFetching: false
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export default reducer;
