import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { calcWidth, calcHeigt } from "../../responsive/ratio.responsive";

const PersonalInfoInput = ({ placeholder }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.textInputBackground}>
        <TextInput
          style={styles.inputStyle}
          placeholder={placeholder}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputBackground: {
    borderRadius: 7,
    padding: calcWidth(1),
    marginHorizontal: calcWidth(3),
    height: calcHeigt(5),
    flex: 1,
    marginVertical: calcHeigt(0.5),
    backgroundColor: "#F2F2F2"
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
    marginLeft: calcWidth(2.5),
    color: "#393C44"
  }
});

export default PersonalInfoInput;
