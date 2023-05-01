import { View, ImageBackground, StyleSheet, Text } from "react-native";
import { styles } from "./styles";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/registration/registrationBG.jpg")}
      >
        <View style={styles.inputWrapper}>
          <Text style={styles.regTitle}>Регистрация</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//     backgroundColor: "#eaeaea",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "repeat",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   innerText: {
//     justifyContent: "center",
//   },
// });
