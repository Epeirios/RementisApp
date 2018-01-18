import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    height: 70,
    width: "100%",
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
