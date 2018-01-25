import EStyleSheet from "react-native-extended-stylesheet";

const CONTAINERHEIGHT = 120;
const PADDING = 5;
const PROFILEPICSIZE = CONTAINERHEIGHT - PADDING * 4;

const GLOBAL = require("../../config/Globals");

export default EStyleSheet.create({
  listContainer: {
  },
  profileContainer: {
    padding: PADDING,
    backgroundColor: GLOBAL.COLOR.WHITE,
    width: "100%",
    flexDirection: "row",
    borderRadius: PADDING,
    marginBottom: PADDING
  },
  profilepicContainer: {
    width: "20%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  detailsContainer: {
    width: "70%",
    paddingLeft: PADDING,
    paddingRight: PADDING,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textContainer: {},
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowSplitContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  stateIconContainer: {},
  profilepic: {
    width: PROFILEPICSIZE,
    height: PROFILEPICSIZE,
    borderRadius: PROFILEPICSIZE / 2
  },
  selectorContainer: {
    width: "10%",    
    alignItems: "flex-end",
    justifyContent: "center",
  },
  titleText: {}
});
