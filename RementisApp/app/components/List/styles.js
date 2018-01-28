import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "lightgrey",
    margin: 5
  },
  remove: {
    paddingRight: 20,
    paddingTop: 5,
    alignItems: "center",
    color: "red"
  }
});
