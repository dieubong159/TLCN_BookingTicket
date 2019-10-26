import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View
} from "react-native";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

const LoginMaterial = ({ setLoginState }) => {
  return (
    <View style={{ marginTop: calcHeigt(1) }}>
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

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => setLoginState(true)}
      >
        <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: calcHeigt(7),
    backgroundColor: "#F2F2F2",
    paddingLeft: calcWidth(2.5),
    textAlignVertical: "center",
    marginBottom: calcHeigt(2.5),
    fontSize: 16,
    borderRadius: 4
  },
  forgetPasswordButton: {
    alignSelf: "center",
    marginTop: calcHeigt(0.8)
  },
  forgetPasswordButtonText: {
    fontSize: 13,
    color: "#78849E"
  },
  loginButton: {
    marginTop: calcHeigt(1.8),
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#3ACCE1",
    height: calcHeigt(7)
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default LoginMaterial;
