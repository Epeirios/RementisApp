import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

export default EStyleSheet.create({
  container: {
    height: 70,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    zIndex: 1,
    flexDirection: "column"
  },
  hfbody: {
    height: 45,
    backgroundColor: "$primaryWhite",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
  },
  footer: {
    top: 25
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
});
