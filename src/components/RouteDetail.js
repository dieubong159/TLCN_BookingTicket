import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RouteDetail = ({ navigation, action }) => {
  return (
    <TouchableOpacity
      style={styles.routeContainer}
      onPress={() => navigation.navigate("Seat")}
      disabled={action}
    >
      <View style={{ marginHorizontal: 10, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", marginVertical: 3 }}>
          <Text style={{ marginRight: 20, fontSize: 15 }}>4:30AM</Text>
          <Text style={{ color: "#A9ACBB", fontSize: 15 }}>12:00PM</Text>
        </View>
        <Text style={{ fontSize: 15, marginVertical: 3 }}>
          Cà Mau -> Tp. Hồ Chí Minh
        </Text>
        <Text style={{ fontSize: 13, marginVertical: 3, color: "#7E7E7E" }}>
          Giường nằm điều hòa
        </Text>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          flex: 1
        }}
      >
        {navigation.state.routeName === "Route" ? (
          <Text style={{ fontSize: 12 }}>14 chỗ trống</Text>
        ) : null}
        <Text style={{ color: "#F7B10A", fontSize: 16, marginTop: 10 }}>
          250.000 VNĐ
        </Text>
        <Text style={{ color: "#A9ACBB" }}>5:30 Giờ</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  routeContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: 20,
    flexDirection: "row",
    padding: 5,
    paddingRight: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20
  }
});

export default RouteDetail;
