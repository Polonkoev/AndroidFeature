import {
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import { useState, useEffect } from "react";

const initialState = {
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [passwordText, setPasswordText] = useState("Показать");
  const [isShownKeyboard, setIsShownKeyboard] = useState(true);
  const [state, setState] = useState(initialState);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordText(showPassword ? "Скрыть" : "Показать");
  };

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();
    console.log(isShownKeyboard);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/registration/registrationBG.jpg")}
        >
          <KeyboardAvoidingView behavior={"height"}>
            <View
              style={{
                ...styles.inputWrapper,
                marginBottom: isShownKeyboard ? 32 : 0,
              }}
              // style={{
              //   ...styles.inputWrapper,
              //   marginBottom: isShownKeyboard ? 0 : 32,
              // }}
            >
              <View style={styles.avatarWrapper}>
                <Image
                  style={styles.orangePlus}
                  source={require("../assets/images/registration/orangePlus.png")}
                ></Image>

                <Text>AVATAR</Text>
              </View>
              <Text style={styles.regTitle}>Регистрация</Text>
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  onFocus={() => setIsShownKeyboard(true)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  onFocus={() => setIsShownKeyboard(true)}
                  // value={state.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={showPassword}
                  onFocus={() => setIsShownKeyboard(true)}
                  // value={state.password}
                />
                <TouchableOpacity style={styles.showPass}>
                  <Text style={styles.passText} onPress={toggleShowPassword}>
                    {passwordText}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.signUpBtn}>
                <Text style={styles.signUpTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <View style={styles.login}>
                <Text style={styles.loginQues}>
                  Уже есть аккаунт? {"\u00A0"}
                </Text>
                <Text style={styles.loginBtn}>Войти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
