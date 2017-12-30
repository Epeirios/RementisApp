import EStyleSheet from "react-native-extended-stylesheet";

const CIRCLE_RADIUS = 25;
const CIRCLE_WIDTH = 4;

const GLOBAL = require("../../config/Globals");

export default EStyleSheet.create({
  container: {
    width: 50,
    height: 70
  },
  labelcontainer: {
    alignItems: "center"
  },
  outercircle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: GLOBAL.COLOR.WHITE,
    alignItems: "center",
    justifyContent: "center"
  },
  centercircle: {
    width: (CIRCLE_RADIUS - CIRCLE_WIDTH) * 2,
    height: (CIRCLE_RADIUS - CIRCLE_WIDTH) * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: "$primaryBlue",
    alignItems: "center",
    justifyContent: "center"
  },
  innercircle: {
    width: (CIRCLE_RADIUS - CIRCLE_WIDTH * 2) * 2,
    height: (CIRCLE_RADIUS - CIRCLE_WIDTH * 2) * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: "$primaryWhite",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: (CIRCLE_RADIUS - CIRCLE_WIDTH * 2) * 2,
    height: (CIRCLE_RADIUS - CIRCLE_WIDTH * 2) * 2
  },
  textBox: {
    color: "$primaryBlue",
    fontSize: 12
  },
  button: {
  }
});
