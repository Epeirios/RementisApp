import EStyleSheet from "react-native-extended-stylesheet";

const CONTAINER_HEIGHT = 70;
const CIRCLE_WIDTH = 50;
const CIRCLE_BAND = 4;

const GLOBAL = require("../../config/Globals");

export default EStyleSheet.create({
  text: {
    color: GLOBAL.COLOR.WHITE
  },
  divider: {
    backgroundColor: GLOBAL.COLOR.WHITE
  },
  button: {
    marginTop: 20,
    backgroundColor: GLOBAL.COLOR.WHITE,
  }
});
