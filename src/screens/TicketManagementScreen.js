import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import OverdueTicketDetail from "../components/OverdueTicketDetail";
import UnusedTicketDetail from "../components/UnusedTicketDetail";
import CancelledTicketDetail from "../components/CancelledTicketDetail";
import HeaderSlogan from "../components/HeaderSlogan";

const TicketManagementScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <HeaderSlogan />
        <View style={{ flexDirection: "row", marginTop: 124 }}>
          <TouchableOpacity style={styles.tabButtonStyle}>
            <Text style={styles.tabButtonText}>Đã đi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButtonStyle}>
            <Text style={styles.tabButtonText}>Chưa đi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButtonStyle}>
            <Text style={styles.tabButtonText}>Đã hủy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <>
        <CancelledTicketDetail />
        <UnusedTicketDetail />
        <UnusedTicketDetail />
        <UnusedTicketDetail />
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#F2EFEF"
  },
  headerContainer: {
    height: 220,
    backgroundColor: "#7438FE"
  },
  imageStyle: {
    height: 30,
    width: 30
  },
  sloganStyle: {
    alignSelf: "center",
    marginHorizontal: 20,
    fontSize: 25,
    color: "white"
  },
  tabButtonStyle: {
    borderRadius: 18,
    marginHorizontal: 10,
    backgroundColor: "white",
    height: 40,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    shadowOffset: { height: 0, width: 5 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: "#000000",
    elevation: 2
  },
  tabButtonText: {
    alignSelf: "center",
    fontSize: 16,
    opacity: 0.5
  }
});

export default TicketManagementScreen;
