import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  formContainer:{
    paddingTop: "40%",
    padding: 15,
  },
  formHeading:{
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 15
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    padding: 10
  },
  submitBtn:{
    backgroundColor: "#63bbf2",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginTop: 10,
  },
  errorText:{
    color: "#FF3333",
    paddingLeft: 10
  }
})