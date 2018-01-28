import { combineReducers } from "redux";

import rementis from "./rementis";
import selects from "./selects";
import agendaForm from "./agendaForm";

export default combineReducers({
  rementis,
  selects,
  agendaForm
});
