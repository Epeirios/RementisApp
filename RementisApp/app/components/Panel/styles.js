import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    backgroundColor: "#fff",
    overflow: "hidden",
    width: "100%"
  },
  titleContainer: {
    flexDirection: "row"
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    paddingLeft: 10,
    paddingTop: 0
  },
  headerChildContainer: {
    width: "90%",
    flexDirection: "row",    
    justifyContent: "center",    
    alignItems: "center",
    paddingRight: 5
  }
});
