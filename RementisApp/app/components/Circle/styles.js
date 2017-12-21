import EStyleSheet from "react-native-extended-stylesheet";

const CIRCLE_RADIUS = 25;
const CIRCLE_WIDTH = 4;

export default EStyleSheet.create({
  container: {
    width: 70,
    height: 70,
  },
  labelcontainer: {
    alignItems: "center",
    elevation: 5
  },
  outercircle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: "$primaryWhite",
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
    justifyContent: "center",
  },
  image: {
    width: (CIRCLE_RADIUS - CIRCLE_WIDTH * 2) * 2,
    height: (CIRCLE_RADIUS - CIRCLE_WIDTH * 2) * 2
  },
  textBox: {
    color: "$primaryBlue",
    fontSize: 12
  }
});
