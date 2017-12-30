import EStyleSheet from "react-native-extended-stylesheet";

const GLOBAL = require("../../config/Globals");

const CONTAINERHEIGHT = 120;
const PADDING = 5;
const PROFILEPICSIZE = CONTAINERHEIGHT - PADDING * 4;

export default EStyleSheet.create({
  container: {},
  profileContainer: {
    flexDirection: "column",
    backgroundColor: GLOBAL.COLOR.GREY,
    borderRadius: PADDING,
    marginBottom: PADDING
  },
  profileHeaderContainer: {
    padding: PADDING,
    backgroundColor: GLOBAL.COLOR.WHITE,
    width: "100%",
    height: CONTAINERHEIGHT,
    flexDirection: "row",
    borderRadius: PADDING
  },
  profilepicContainer: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center"
  },
  detailsContainer: {
    paddingLeft: PADDING,
    paddingRight: PADDING,
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textContainer: {},
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20
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
  titleText: {}
});
