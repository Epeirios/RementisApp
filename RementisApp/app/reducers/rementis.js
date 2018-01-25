import { GET_PROFILE_DATA } from "../actions/rementis";

import { agendaPointStatesEnum } from "../enums";

const initialState = {
  isFetching: false,
  profiles: [
    {
      patientId: 1,
      firstName: "Herbert",
      lastName: "Kartoffelsalat",
      gender: "male",
      profilePic: require("../resources/images/opa1.jpg"),
      items: [
        {
          messageId: 1,
          title: "Medicatie innemen",
          patientId: 1,
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
          patientId: 1,
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
          patientId: 1,
          description: "Met Truus bellen over het kampioenschap bridgen",
          startDate: "12-01-2018",
          endDate: "12-01-2018",
          startTime: "16:00",
          endTime: "16:30",
          priority: false,
          state: agendaPointStatesEnum.completed
        }
      ]
    },
    {
      patientId: 2,
      firstName: "Hermelien",
      lastName: "Jaspers",
      gender: "female",
      profilePic: require("../resources/images/oma1.jpg"),
      items: [
        {
          messageId: 4,
          title: "Medicatie innemen",
          patientId: 2,
          description: "Met Truus bellen over het kampioenschap bridgen",
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
