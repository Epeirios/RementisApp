import {
  GET_PROFILE_DATA,
  GET_PROFILE_DATA_ERROR,
  PROFILE_DATA
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
  isFetching: false,
  profiles: [
    {
      customerId: 1,
      voornaam: "Herbert",
      achternaam: "Kartoffelsalat",
      geslacht: "male",
      profilePic: require("../resources/images/opa1.jpg"),
      items: [
        {
          messageId: 1,
          title: "Medicatie innemen",
          customerId: 1,
          description: "Neem 5 paracetamol en 2 ibuprofen",
          startDate: "12-01-2018",
          endDate: "12-01-2018",
          startTime: "11:00",
          endTime: "11:00",
          priority: true,
          state: agendaPointStatesEnum.failed
        },
        {
          messageId: 2,
          title: "Doktors afspraak",
          customerId: 1,
          description: "Een afspraak bij doktor Klaassen voor de zware hoest",
          startDate: "12-01-2018",
          endDate: "12-01-2018",
          startTime: "12:00",
          endTime: "14:00",
          priority: false,
          state: agendaPointStatesEnum.pending
        },
        {
          messageId: 3,
          title: "Truus Bellen",
          customerId: 1,
          description: "Met Truus bellen over het kampioenschap bridgen",
          startDate: "12-01-2018",
          endDate: "12-01-2018",
          startTime: "16:00",
          endTime: "16:30",
          priority: false,
          state: agendaPointStatesEnum.completed
        },
        {
          messageId: 5,
          title: "darryl",
          customerId: 1,
          description: "Neem 5 paracetamol en 2 ibuprofen",
          startDate: "12-01-2018",
          endDate: "12-01-2018",
          startTime: "11:00",
          endTime: "11:00",
          priority: true,
          state: agendaPointStatesEnum.failed
        }
      ]
    },
    {
      customerId: 2,
      voornaam: "Hermelien",
      achternaam: "Jaspers",
      geslacht: "female",
      profilePic: require("../resources/images/oma1.jpg"),
      items: [
        {
          messageId: 4,
          title: "Medicatie slikken",
          customerId: 2,
          description: "4 cl morfine",
          startDate: "12-01-2018",
          endDate: "12-01-2018",
          startTime: "13:00",
          endTime: "13:00",
          priority: false,
          state: agendaPointStatesEnum.completed
        }
      ]
    }
  ]
};

const reducer = (state = temp, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        isFetching: true
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
    default:
      return state;
  }
};

export default reducer;
