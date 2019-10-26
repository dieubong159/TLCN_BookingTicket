import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import BackButton from "./BackButton";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

const HeaderBooking = ({ navigation, title }) => {
  return (
    <>
      <BackButton navigation={navigation} />

      <Text style={styles.sloganStyle}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          // marginTop: calcHeigt(1.3),
          marginBottom: calcHeigt(1)
        }}
      >
        <Text style={styles.locationText}>Cà Mau</Text>
        <TouchableOpacity
          style={{ marginHorizontal: calcWidth(4), alignSelf: "center" }}
        >
          <Entypo name='swap' style={styles.logoButton} />
        </TouchableOpacity>
        <Text style={styles.locationText}>Tp. Hồ Chí Minh</Text>
      </View>

      <Text style={styles.timeText}>29 - 12 - 2019 Thứ 3</Text>
    </>
  );
};

const styles = StyleSheet.create({
  sloganStyle: {
    // marginTop: calcHeigt(2),
    fontSize: 17,
    color: "white",
    alignSelf: "center"
  },
  logoButton: {
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center"
  },
  locationText: {
    fontSize: 22,
    color: "#FFFFFF",
    alignSelf: "center"
  },
  timeText: {
    fontSize: 16,
    color: "#FFFFFF",
    alignSelf: "center",
    marginBottom: calcHeigt(2.5),
    fontWeight: "bold"
  }
});

export default HeaderBooking;
