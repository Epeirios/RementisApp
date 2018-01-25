import EStyleSheet from "react-native-extended-stylesheet";

const GLOBAL = require("../../config/Globals");

const CONTAINERHEIGHT = 120;
const PADDING = 5;

export default EStyleSheet.create({
  container: {
  },
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
    justifyContent: "center",
  },
  detailsContainer: {
    width: "70%",
  },
  crudContainer: {
    width: "15%",
    padding: PADDING,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textContainer: {
    
  }
});
