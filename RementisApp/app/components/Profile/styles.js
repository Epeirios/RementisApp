import EStyleSheet from "react-native-extended-stylesheet";

const GLOBAL = require("../../config/Globals");

const CONTAINERHEIGHT = 120;
const PADDING = 5;
const PROFILEPICSIZE = CONTAINERHEIGHT - PADDING * 2;

export default EStyleSheet.create({
  container:{
    padding: PADDING,
    backgroundColor: GLOBAL.COLOR.WHITE,
    width: '100%',
    height: CONTAINERHEIGHT,
    flexDirection: 'row',
    borderRadius: PADDING
  },
  profilepicContainer : {

  },
  detailsContainer: {
      padding: PADDING,
    flexDirection: 'column'
  },
  textContainer: {

  },
  statusContainer: {
    flexDirection: 'row'
  },
  rowSplitContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  stateIconContainer:{

  },
  profilepic: {
    width: PROFILEPICSIZE, 
    height: PROFILEPICSIZE,
    borderRadius: PROFILEPICSIZE / 2,
  },
  text:{

  }
});
