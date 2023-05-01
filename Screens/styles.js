import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#eaeaea",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputWrapper: {
    width: "100%",

    height: 574,
    backgroundColor: "#ffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
  },
  regTitle: {
    fontSize: 30,
    lineHeight: 35.16,
    marginTop: 92,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
