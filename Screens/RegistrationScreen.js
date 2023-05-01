import {
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordText, setPasswordText] = useState("Показать");
  const [state, setState] = useState(initialState);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordText(showPassword ? "Скрыть" : "Показать");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/registration/registrationBG.jpg")}
      >
        <View style={styles.inputWrapper}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.orangePlus}
              source={require("../assets/images/registration/orangePlus.png")}
            ></Image>

            <Text>AVATAR</Text>
          </View>
          <Text style={styles.regTitle}>Регистрация</Text>
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Логин" />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              // value={state.email}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={showPassword}
              // value={state.password}
            />
            <TouchableOpacity style={styles.showPass}>
              <Text style={styles.passText} onPress={toggleShowPassword}>
                {passwordText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
