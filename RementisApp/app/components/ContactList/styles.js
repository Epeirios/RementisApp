import EStyleSheet from "react-native-extended-stylesheet";

const CIRCLE_WIDTH = 50;
const PADDING = 5;

const GLOBAL = require("../../config/Globals");

export default EStyleSheet.create({
  container: {
    padding: PADDING,
    backgroundColor: GLOBAL.COLOR.WHITE,
    width: "100%",
    flexDirection: "row",
    borderRadius: PADDING,
    marginBottom: PADDING
  },
  profileContainer: {    
    flexDirection: "column",
    flex: 1,
    //marginRight: CIRCLE_WIDTH / 2,
    backgroundColor: GLOBAL.COLOR.GREY,
    borderRadius: PADDING,
  },
  profilepicContainer: {
    width: CIRCLE_WIDTH,
    alignItems: "center",
    justifyContent: "center"
  },
  listContainer: {
    width: "100%",
    paddingBottom: PADDING
  },
  nameContainer: {

  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  }
});
