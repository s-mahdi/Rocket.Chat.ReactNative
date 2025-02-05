import { StyleSheet } from "react-native";
import sharedStyles from "../Styles";

export const loginStyles = StyleSheet.create({
  registerDisabled: {
    ...sharedStyles.textRegular,
    ...sharedStyles.textAlignCenter,
    fontSize: 16
  },
  title: {
    ...sharedStyles.textBold,
    fontSize: 22
  },
  inputContainer: {
    marginVertical: 16
  },
  bottomContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 32
  },
  bottomContainerText: {
    ...sharedStyles.textRegular,
    fontSize: 13
  },
  bottomContainerTextBold: {
    ...sharedStyles.textSemibold,
    fontSize: 13
  },
  loginButton: {
    marginTop: 16
  }
});
