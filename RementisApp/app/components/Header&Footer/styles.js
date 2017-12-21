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
    zIndex: 2
  },
  header: {},
  footer: {
    top: 25
  },
  innerbox: {
    flexDirection: "row",
    justifyContent: 'space-between',
    position: "absolute",
    start: 0,
    end: 0,
    zIndex: 5
  }
});
