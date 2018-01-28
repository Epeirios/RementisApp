import EStyleSheet from "react-native-extended-stylesheet";

const CONTAINER_HEIGHT = 70;
const CIRCLE_WIDTH = 50;
const CIRCLE_BAND = 4;

const GLOBAL = require("../../config/Globals");

export default EStyleSheet.create({
  container: {
    width: CIRCLE_WIDTH
  },
  haslabelContainer: {
    height: CONTAINER_HEIGHT
  },
  nolabelContainer: {
    height: CIRCLE_WIDTH
  },
  labelcontainer: {
    alignItems: "center",
    justifyContent: "center",
    height: CONTAINER_HEIGHT - CIRCLE_WIDTH
  },
  outercircle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderRadius: CIRCLE_WIDTH / 2,
    backgroundColor: GLOBAL.COLOR.WHITE,
    alignItems: "center",
    justifyContent: "center"
  },
  centercircle: {
    width: (CIRCLE_WIDTH / 2 - CIRCLE_BAND) * 2,
    height: (CIRCLE_WIDTH / 2 - CIRCLE_BAND) * 2,
    borderRadius: CIRCLE_WIDTH,
    backgroundColor: GLOBAL.COLOR.GREYBLUE,
    alignItems: "center",
    justifyContent: "center"
  },
  innercircle: {
    width: (CIRCLE_WIDTH / 2 - CIRCLE_BAND * 2) * 2,
    height: (CIRCLE_WIDTH / 2 - CIRCLE_BAND * 2) * 2,
    borderRadius: CIRCLE_WIDTH,
    backgroundColor: GLOBAL.COLOR.WHITE,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: (CIRCLE_WIDTH / 2 - CIRCLE_BAND * 2) * 2,
    height: (CIRCLE_WIDTH / 2 - CIRCLE_BAND * 2) * 2
  }
});
