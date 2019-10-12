import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const HeaderSlogan = () => {
  return (
    <View style={{ flexDirection: "row", top: 78, alignSelf: "center" }}>
      <Text style={styles.sloganStyle}>Đi đến nơi</Text>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/map.png")}
      />
      <Text style={styles.sloganStyle}>Về đến chốn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 30,
    width: 30
  },
  sloganStyle: {
    alignSelf: "center",
    marginHorizontal: 20,
    fontSize: 25,
    color: "white"
  }
});

export default HeaderSlogan;
