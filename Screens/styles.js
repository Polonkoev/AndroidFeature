import { StyleSheet } from "react-native";

import * as Font from "expo-font";

export const loadApplication = async () => {
  await Font.loadAsync({
    RobotoReqular: require("../assets/fonts/Roboto/roboto-regular.ttf"),
    RobotoBold: require("../assets/fonts/Roboto/roboto-bold.ttf"),
    LobsterReqular: require("../assets/fonts/Lobster/Lobster-Regular.ttf"),
  });
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#eaeaea",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputWrapper: {
    width: "100%",

    height: 574,
    // backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  avatarWrapper: {
    marginTop: -60,

    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f6f6f6",
  },

  orangePlus: {
    position: "absolute",
    bottom: 14,
    left: 107,
  },
  regTitle: {
    fontFamily: "RobotoRegular",
    fontSize: 30,
    lineHeight: 35.16,
    marginTop: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  // Form
  form: {
    marginTop: 17,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    marginTop: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    alignItems: "center",
    paddingLeft: 16,
    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,
    color: "#bdbdbd",
  },
  // Password
  passText: {
    position: "absolute",

    right: 16,
    bottom: 15,
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },

  //SignUpBtn
  signUpBtn: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    marginHorizontal: 16,
    marginTop: 43,
    borderRadius: 100,
  },
  signUpTitle: {
    color: "#fff",
    fontSize: 16,
  },
  // Login

  login: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  loginQues: {
    fontSize: 16,
    color: "#1B4371",
  },
  loginBtn: {
    fontSize: 16,
    color: "#1B4371",
  },
});
