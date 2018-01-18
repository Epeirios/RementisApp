import { GET_PROFILE_DATA } from "../actions/rementis";

const initialState = {
  isFetching: true,
  profiles: [
    {
      name: "herbert kartoffelsalat",
      profilepic: require("../resources/images/opa1.jpg"),
      items: [
        {
          title: "Medicatie Innemen",
          time: "11:00",
          status: "wrong"
        },
        {
          title: "Doktors afspraak",
          time: "10:00",
          status: "good"
        },
        {
          title: "Truus Bellen",
          time: "15:00",
          status: "pending"
        }
      ]
    },
    {
      name: "Hermelien Jaspers",
      profilepic: require("../resources/images/oma1.jpg"),
      items: [
        {
          title: "Medicatie Innemen",
          time: "11:00",
          status: "pending"
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

console.log("initialState", initialState);

export default reducer;
