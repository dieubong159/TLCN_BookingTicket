import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

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
    padding: 5,
    marginHorizontal: 20,
    height: 40,
    flex: 1,
    marginVertical: 5,
    backgroundColor: "#F2F2F2"
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    color: "#393C44"
  }
});

export default PersonalInfoInput;
