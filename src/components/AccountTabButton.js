import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

const AccountTabButton = ({ setRegisterState }) => {
  return (
    <>
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setRegisterState(false)}
        >
          <Text style={styles.headerButtonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => setRegisterState(true)}
        >
          <Text style={styles.headerButtonText}>ĐĂNG KÝ</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerButtonContainer: {
    height: calcHeigt(7),
    flexDirection: "row",
    bottom: 0,
    top: calcHeigt(15),
    shadowOffset: { height: calcHeigt(1.8), width: calcWidth(2.5) },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: "#000000",
    elevation: 1
  },
  headerButton: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  headerButtonText: {
    fontSize: 16,
    alignSelf: "center",
    color: "#454F63"
  }
});

export default AccountTabButton;
