import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
export const RegistrationScreen = () => {
  const [isShow, setIsShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={{ ...styles.main }}>
      <View style={{ ...styles.form }}>
        <Text style={styles.text}>Реєстрація</Text>
        <View>
          <TextInput
            onFocus={() => {
              setIsShow(true);
            }}
            style={{ ...styles.input, marginTop: 32 }}
            placeholder="Логін"
          />
        </View>
        <View>
          <TextInput
            onFocus={() => {
              setIsShow(true);
            }}
            style={{ ...styles.input, marginTop: 16 }}
            placeholder="Адреса електронної пошти"
          />
        </View>
        <View style={{ position: "relative" }}>
          <TextInput
            onFocus={() => {
              setIsShow(true);
            }}
            secureTextEntry={!showPassword}
            style={{ ...styles.input, marginTop: 16 }}
            placeholder="Пароль"
          />
          {!showPassword ? (
            <TouchableOpacity
              style={styles.showButton}
              onPress={toggleShowPassword}
            >
              <Text>Показати</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.showButton}
              onPress={toggleShowPassword}
            >
              <Text>Приховати</Text>
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonSecondary}>
          <Text style={styles.textButtonSec}>Вже є акаунт? Увійти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  // cont: { paddingTop: 100 },
  main: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.015,
    marginTop: 92,
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    padding: 16,
  },
  placeholder: {
    color: "#BDBDBD",
  },
  showButton: {
    position: "absolute",
    top: 36,
    right: 10,
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: "#FF6B01",
    borderRadius: 100,
    padding: 16,
    marginTop: 43,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  ButtonSecondary: {
    marginTop: 16,
    alignItems: "center",
  },
  textButtonSec: {
    color: "#1B4371",
  },
});
export default RegistrationScreen;
