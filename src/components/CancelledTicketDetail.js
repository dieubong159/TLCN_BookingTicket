import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const CancelledTicketDetail = () => {
  return (
    <View style={styles.ticketContainer}>
      <View style={{ flex: 7, flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text style={styles.timeText}>16:30</Text>
          <Text style={styles.locationText}>Cà Mau</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <EvilIcons
              name='clock'
              style={{ fontSize: 15, alignSelf: "center" }}
            />
            <Text style={styles.typeOfBusText}>Hủy ngày 12-09-2019</Text>
          </View>
          <Image
            style={styles.imageStyle}
            source={require("../../assets/bus.png")}
          />
          <Text style={styles.typeOfBusText}>Đã hủy thành công</Text>
        </View>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <Text style={styles.timeText}>00:30</Text>
          <Text style={styles.locationText}>Tp. Hồ Chí Minh</Text>
        </View>
      </View>
      <View style={{ flex: 3 }}>
        <Text style={{ alignSelf: "flex-end", fontSize: 12, color: "#FFAE42" }}>
          26-09-2019
        </Text>
        <Text
          style={{
            alignSelf: "flex-end",
            textAlignVertical: "center",
            flex: 1
          }}
        >
          250.000 VNĐ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    flexDirection: "row",
    borderRadius: 5,
    shadowOffset: { height: 0, width: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    marginTop: 15,
    marginHorizontal: 12,
    shadowColor: "#000000",
    elevation: 2,
    backgroundColor: "white",
    padding: 5,
    height: 110
  },
  locationText: {
    fontSize: 14,
    marginTop: 55
  },
  timeText: {
    color: "#4D0099",
    fontSize: 15
  },
  typeOfBusText: {
    fontSize: 11,
    color: "#FFAE42"
  },
  imageStyle: {
    height: 30,
    width: 30
  }
});

export default CancelledTicketDetail;
