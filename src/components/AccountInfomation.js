import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { calcWidth, calcHeigt } from "../../responsive/ratio.responsive";

const AccountInfomation = ({ editState, setEditState, setLoginState }) => {
  const [emailText, setEmailText] = useState("nguyentandc42@gmail.com");
  const [addressText, setAddressText] = useState(
    "Quận 9, Thủ Đức, TP. Hồ Chí Minh"
  );
  const buttonText = { leftButton: "ĐỔI MẬT KHẨU", rightButton: "ĐĂNG XUẤT" };
  if (editState) {
    buttonText.leftButton = "LƯU";
    buttonText.rightButton = "HỦY BỎ";
  } else {
    buttonText.leftButton = "ĐỔI MẬT KHẨU";
    buttonText.rightButton = "ĐĂNG XUẤT";
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: calcHeigt(5)
      }}
    >
      <KeyboardAvoidingView behavior='padding' style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, color: "#454F63" }}>Nguyễn Thanh Tân</Text>
        <Text style={{ fontSize: 20, color: "#78849E" }}>058 6060734</Text>
        <TextInput
          value={emailText}
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
          editable={editState}
          onChangeText={newText => setEmailText(newText)}
        />
        <TextInput
          value={addressText}
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          editable={editState}
          onChangeText={newText => setAddressText(newText)}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.onTheLeftButton}>
            <Text style={styles.buttonText}>{buttonText.leftButton}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.onTheRightButton}
            onPress={() => {
              if (editState) {
                setEditState(false);
              } else {
                setLoginState(false);
              }
            }}
          >
            <Text style={styles.buttonText}>{buttonText.rightButton}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: calcHeigt(7),
    width: calcWidth(80),
    backgroundColor: "#F1F1F1",
    paddingLeft: calcWidth(3),
    textAlignVertical: "center",
    marginVertical: calcHeigt(0.3),
    fontSize: 16,
    borderRadius: 4
  },
  onTheLeftButton: {
    padding: calcWidth(3),
    marginTop: calcHeigt(0.3),
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#8C5FF3",
    height: calcHeigt(6),
    flex: 1,
    marginRight: calcWidth(1)
  },
  onTheRightButton: {
    padding: calcWidth(3),
    marginTop: calcHeigt(0.3),
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#D6804E",
    height: calcHeigt(6),
    flex: 1,
    marginLeft: calcWidth(1)
  },
  buttonText: {
    color: "white",
    alignSelf: "center"
  }
});

export default AccountInfomation;
