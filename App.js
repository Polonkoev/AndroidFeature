import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  console.log("Действие на: ", Platform.OS);
  const [isSownKeyboard, setIsSownKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsSownKeyboard(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./img/images/darkSpace.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "margin"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isSownKeyboard ? 20 : 100,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello again</Text>
                <Text style={styles.headerTitle}>Welcome back</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  onFocus={() => setIsSownKeyboard(true)}
                />
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.inputTitle}>PASSWORD</Text>
                  <TextInput
                    style={styles.input}
                    textAlign={"center"}
                    secureTextEntry={true}
                    color={"#fff"}
                    onFocus={() => setIsSownKeyboard(true)}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={() => keyboardHide()}
              >
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#eaeaea",
  },
  title: {
    flex: 1,
  },
  innerText: {
    borderWidth: 1,
    borderColor: "red",
    textAlign: "center",
    alignItems: "center",

    fontSize: 18,
    borderRadius: 10,
    color: "white",
    backgroundColor: "green",
  },
  image: {
    flex: 1,
    resizeMode: "repeat",
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#7fff00",
    height: 40,
    borderRadius: 6,

    color: "#00ffff",
  },
  form: {
    marginHorizontal: 40,
    marginBottom: 100,
  },
  inputTitle: {
    color: "#00ffff",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    ...Platform.select({
      web: {
        backgroundColor: "transparent",
        borderColor: "transparent",
      },
      android: {
        backgroundColor: "#00ffff",
        borderColor: "#808080",
      },
      ios: {
        backgroundColor: "#00ffff",
        borderColor: "#808080",
      },
    }),

    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    marginHorizontal: 20,
  },
  btnTitle: {
    ...Platform.select({
      web: {
        color: "#00ffff",
      },
      android: {
        color: "#808080",
      },
    }),

    fontStyle: "normal",
    fontSize: 18,
  },
  header: {
    alignItems: "center",
    marginBottom: 50,
  },
  headerTitle: {
    fontSize: 30,
    color: "#00ffff",
  },
});
