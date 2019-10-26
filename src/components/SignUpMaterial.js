import React from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

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
    height: calcHeigt(6),
    backgroundColor: "#F2F2F2",
    paddingLeft: calcWidth(3),
    textAlignVertical: "center",
    marginBottom: calcHeigt(1.5),
    borderRadius: 4,
    fontSize: 15
  },
  signupButton: {
    marginTop: calcHeigt(1.4),
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#3ACCE1",
    height: calcHeigt(7)
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default SignUpMaterial;
