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
} from "react-native";
export const LoginScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(Platform.OS);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Увійти</Text>
        <View>
          <TextInput
            style={styles.input}
            name="login"
            placeholder="Логін"
            value={login}
            onChangeText={(value) => handleChange("login", value)}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            name="email"
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={(value) => handleChange("email", value)}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            style={styles.input}
            name="password"
            placeholder="Пароль"
            value={password}
            secureTextEntry={true}
            onChangeText={(value) => handleChange("password", value)}
          />
        </View>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 94,
    paddingBottom: 45,

    backgroundColor: "#fff",
    alignItems: "center",
  },

  inputContainer: {},
  text: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },

  input: {
    borderRadius: 8,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    backgroundColor: "#E8E8E8",
    width: "100%",
    padding: 16,
    width: 300,
  },
  placeholder: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  buttonPrimary: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 43,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 19,

    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
