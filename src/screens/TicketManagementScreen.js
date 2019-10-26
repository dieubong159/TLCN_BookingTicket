import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import OverdueTicketDetail from "../components/OverdueTicketDetail";
import UnusedTicketDetail from "../components/UnusedTicketDetail";
import CancelledTicketDetail from "../components/CancelledTicketDetail";
import HeaderSlogan from "../components/HeaderSlogan";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

const TicketManagementScreen = () => {
  const [onGoingTab, setOnGoingTab] = useState(false);
  const [onCanceledTab, setOnCanceledTab] = useState(false);
  const [onGoneTab, setOnGoneTab] = useState(true);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <HeaderSlogan />
        <View style={{ flexDirection: "row", marginTop: calcHeigt(14) }}>
          {onGoneTab ? (
            <TouchableOpacity
              style={styles.tabButtonStyleActive}
              onPress={() => {
                setOnGoingTab(false);
                setOnGoneTab(true);
                setOnCanceledTab(false);
              }}
            >
              <Text style={styles.tabButtonTextActive}>Đã đi</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.tabButtonStyleInactive}
              onPress={() => {
                setOnGoingTab(false);
                setOnGoneTab(true);
                setOnCanceledTab(false);
              }}
            >
              <Text style={styles.tabButtonTextInactive}>Đã đi</Text>
            </TouchableOpacity>
          )}

          {onGoingTab ? (
            <TouchableOpacity
              style={styles.tabButtonStyleActive}
              onPress={() => {
                setOnGoingTab(true);
                setOnGoneTab(false);
                setOnCanceledTab(false);
              }}
            >
              <Text style={styles.tabButtonTextActive}>Chưa đi</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.tabButtonStyleInactive}
              onPress={() => {
                setOnGoingTab(true);
                setOnGoneTab(false);
                setOnCanceledTab(false);
              }}
            >
              <Text style={styles.tabButtonTextInactive}>Chưa đi</Text>
            </TouchableOpacity>
          )}

          {onCanceledTab ? (
            <TouchableOpacity
              style={styles.tabButtonStyleActive}
              onPress={() => {
                setOnGoingTab(false);
                setOnGoneTab(false);
                setOnCanceledTab(true);
              }}
            >
              <Text style={styles.tabButtonTextActive}>Chưa đi</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.tabButtonStyleInactive}
              onPress={() => {
                setOnGoingTab(false);
                setOnGoneTab(false);
                setOnCanceledTab(true);
              }}
            >
              <Text style={styles.tabButtonTextInactive}>Chưa đi</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <>
        {onCanceledTab ? (
          <>
            <CancelledTicketDetail />
            <CancelledTicketDetail />
            <CancelledTicketDetail />
          </>
        ) : onGoingTab ? (
          <>
            <UnusedTicketDetail />
            <UnusedTicketDetail />
            <UnusedTicketDetail />
          </>
        ) : onGoneTab ? (
          <>
            <OverdueTicketDetail />
            <OverdueTicketDetail />
            <OverdueTicketDetail />
          </>
        ) : null}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#F2EFEF"
  },
  headerContainer: {
    height: calcHeigt(28),
    backgroundColor: "#7438FE"
  },
  tabButtonStyleActive: {
    borderRadius: 18,
    marginHorizontal: 10,
    backgroundColor: "#FFB900",
    height: calcHeigt(6),
    width: calcWidth(25),
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    shadowOffset: { height: 0, width: calcWidth(1.2) },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: "#000000",
    elevation: 2
  },
  tabButtonTextActive: {
    alignSelf: "center",
    fontSize: 16,
    opacity: 0.5,
    color: "white"
  },
  tabButtonStyleInactive: {
    borderRadius: 18,
    marginHorizontal: 10,
    backgroundColor: "white",
    height: calcHeigt(6),
    width: calcWidth(25),
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    shadowOffset: { height: 0, width: calcWidth(1.2) },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: "#000000",
    elevation: 2
  },
  tabButtonTextInactive: {
    alignSelf: "center",
    fontSize: 16,
    opacity: 0.5,
    color: "black"
  }
});

export default TicketManagementScreen;
