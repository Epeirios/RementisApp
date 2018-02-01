import EStyleSheet from "react-native-extended-stylesheet";

const GLOBAL = require("../../config/Globals");

const CONTAINERHEIGHT = 120;
const PADDING = 5;

export default EStyleSheet.create({
  container: {},
  itemContainer: {
    padding: PADDING,
    backgroundColor: GLOBAL.COLOR.WHITE,
    width: "100%",
    flexDirection: "row",
    borderRadius: PADDING,
    marginBottom: PADDING
  },
  statusContainer: {
    width: "15%",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  detailsContainer: {
    width: "80%"
  },
  crudContainer: {
    padding: PADDING,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "20%"
  },
  textContainer: {},
  headerContainer: {
    width: "100%",
    flexDirection: "row",   
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  bodyContainer: {
    flexDirection: "row",
  },
  headerDetailsContainer:{
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  headerSubDetailsContainer: {
    flexDirection: "row",
  }
});
