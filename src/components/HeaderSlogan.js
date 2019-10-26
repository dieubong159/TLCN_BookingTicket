import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { calcWidth, calcHeigt } from "../../responsive/ratio.responsive";

const HeaderSlogan = () => {
  return (
    <View
      style={{ flexDirection: "row", top: calcHeigt(9), alignSelf: "center" }}
    >
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
    height: calcHeigt(6),
    width: calcWidth(10)
  },
  sloganStyle: {
    alignSelf: "center",
    marginHorizontal: calcWidth(5),
    fontSize: 25,
    color: "white"
  }
});

export default HeaderSlogan;
