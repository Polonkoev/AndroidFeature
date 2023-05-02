import { useState, useEffect } from "react";

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
  Dimensions,
  StatusBar,
} from "react-native";
// import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { RegistrationScreen } from "./Screens/RegistrationScreen";

const initialState = {
  email: "",
  password: "",
};

// const loadApplication = async () => {
//   await Font.loadAsync({
//     RobotoReqular: require("./assets/fonts/Roboto/roboto-regular.ttf"),
//     RobotoBold: require("./assets/fonts/Roboto/roboto-bold.ttf"),
//     LobsterReqular: require("./assets/fonts/Lobster/Lobster-Regular.ttf"),
//   });
// };

export default function App() {
  console.log("Действие на: ", Platform.OS);

  // const [isSownKeyboard, setIsSownKeyboard] = useState(false);
  // const [state, setState] = useState(initialState);
  // const [isReady, setIsReady] = useState(false);
  // const [dimensions, setDimensions] = useState(
  //   Dimensions.get("window").width - 20 * 2
  // );
  // const keyboardHide = () => {
  //   setIsSownKeyboard(false);
  //   Keyboard.dismiss();
  //   setState(initialState);
  // };
  // useEffect(() => {
  //   const onChange = () => {
  //     const width = Dimensions.get("window").width - 20 * 2;
  //     console.log("WIDTH", width);
  //   };
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // }, []);

  // if (!isReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIsReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
    <View style={styles.container}>
      <StatusBar theme={"auto"} />
      <RegistrationScreen></RegistrationScreen>
    </View>

    //   <TouchableWithoutFeedback onPress={keyboardHide}>
    //     <View style={styles.container}>
    //       <ImageBackground
    //         style={styles.image}
    //         source={require("./img/images/darkSpace.jpg")}
    //       >
    //         <KeyboardAvoidingView
    //           behavior={Platform.OS === "ios" ? "padding" : "margin"}
    //         >
    //           <View
    //             style={{
    //               ...styles.form,
    //               marginBottom: isSownKeyboard ? 20 : 100,
    //               width: dimensions,
    //             }}
    //           >
    //             <View style={styles.header}>
    //               <Text style={styles.headerTitle}>Hello</Text>
    //               <Text style={styles.headerTitle}>Wellcome again</Text>
    //             </View>
    //             <View>
    //               <Text style={styles.inputTitle}>EMAIL ADDRES</Text>
    //               <TextInput
    //                 style={styles.input}
    //                 textAlign={"center"}
    //                 onFocus={() => setIsSownKeyboard(true)}
    //                 onChangeText={(value) =>
    //                   setState((prevState) => ({ ...prevState, email: value }))
    //                 }
    //                 value={state.email}
    //               />
    //               <View style={{ marginTop: 20 }}>
    //                 <Text style={styles.inputTitle}>PASSWORD</Text>
    //                 <TextInput
    //                   style={styles.input}
    //                   textAlign={"center"}
    //                   secureTextEntry={true}
    //                   color={"#fff"}
    //                   onFocus={() => setIsSownKeyboard(true)}
    //                   onChangeText={(value) =>
    //                     setState((prevState) => ({
    //                       ...prevState,
    //                       password: value,
    //                     }))
    //                   }
    //                   value={state.password}
    //                 />
    //               </View>
    //             </View>
    //             <TouchableOpacity
    //               style={styles.btn}
    //               activeOpacity={0.8}
    //               onPress={() => keyboardHide()}
    //             >
    //               <Text style={styles.btnTitle}>SIGN IN</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </KeyboardAvoidingView>
    //       </ImageBackground>
    //     </View>
    //   </TouchableWithoutFeedback>
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
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#7fff00",
    height: 40,
    borderRadius: 6,

    color: "#00ffff",
  },
  form: {
    // marginHorizontal: 40,
    marginBottom: 100,
  },
  inputTitle: {
    color: "#00ffff",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "RobotoReqular",
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
    fontFamily: "LobsterReqular",
  },
});
