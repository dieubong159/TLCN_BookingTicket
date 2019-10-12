import React from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const LoginMaterial = () => {
  return (
    <>
      <TextInput
        placeholder='Số điện thoại'
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='telephoneNumber'
      />
      <TextInput
        placeholder='Mật khẩu'
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='password'
      />
      <TouchableOpacity style={styles.forgetPasswordButton}>
        <Text style={styles.forgetPasswordButtonText}>QUÊN MẬT KHẨU</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    backgroundColor: "white",
    paddingLeft: 10,
    textAlignVertical: "center",
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 4
  },
  forgetPasswordButton: {
    alignSelf: "center",
    marginTop: 5
  },
  forgetPasswordButtonText: {
    fontSize: 13,
    color: "#78849E"
  },
  loginButton: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#3ACCE1",
    height: 45
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default LoginMaterial;
