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
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.main }}>
        <View style={{ ...styles.form, marginBottom: isShow ? 94 : 32 }}>
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
          <View>
            <TextInput
              onFocus={() => {
                setIsShow(true);
              }}
              secureTextEntry={true}
              style={{ ...styles.input, marginTop: 16 }}
              placeholder="Пароль"
            />
          </View>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
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
});
export default RegistrationScreen;
