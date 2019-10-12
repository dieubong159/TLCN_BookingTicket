import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchPropButton = ({ placeholder, iconname }) => {
  return (
    <View style={styles.containerStyle}>
      <EvilIcons style={styles.iconStyle} name={`${iconname}`} />
      <TextInput
        style={styles.inputStyle}
        placeholder={`${placeholder}`}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 7,
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 20,
    height: 50,
    borderColor: "#C7B0FA",
    borderWidth: 2,
    flex: 1,
    marginVertical: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 15
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
    color: "#C7B0FA"
  }
});

export default SearchPropButton;
