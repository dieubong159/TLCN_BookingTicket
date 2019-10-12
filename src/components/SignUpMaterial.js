import React from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const SignUpMaterial = () => {
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
        placeholder='Email'
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='emailAddress'
      />

      <TextInput
        placeholder='Mật khẩu'
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='newPassword'
      />

      <TextInput
        placeholder='Nhập lại mật khẩu'
        style={styles.textInput}
        autoCapitalize='none'
        autoCorrect={false}
        textContentType='password'
      />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>ĐĂNG KÝ</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 35,
    backgroundColor: "white",
    paddingLeft: 10,
    textAlignVertical: "center",
    marginBottom: 15,
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
  signupButton: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#3ACCE1",
    height: 45
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default SignUpMaterial;
