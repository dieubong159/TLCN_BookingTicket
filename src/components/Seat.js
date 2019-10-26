import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { calcWidth } from "../../responsive/ratio.responsive";

const Seat = () => {
  const [color, setColor] = useState("#A9ACBB");

  return (
    <TouchableOpacity
      style={{ flexDirection: "row", justifyContent: "center" }}
      onPress={() => {
        if (color === "#A9ACBB") setColor("#F7B10A");
        else setColor("#A9ACBB");
      }}
      on
    >
      <MaterialIcons
        name='event-seat'
        style={{ fontSize: calcWidth(9), color: color }}
      />
      <Text style={styles.seatCode}>A1</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seatCode: {
    color: "black",
    alignSelf: "center",
    position: "absolute",
    fontSize: calcWidth(4.5)
  }
});

export default Seat;
