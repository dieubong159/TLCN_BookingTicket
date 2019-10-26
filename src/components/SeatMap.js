import React from "react";
import { View, StyleSheet } from "react-native";
import Seat from "../components/Seat";
import { calcWidth } from "../../responsive/ratio.responsive";

const SeatMap = () => {
  return (
    <>
      <View style={{ margin: calcWidth(1.5) }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View>
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
          </View>
          <View>
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
          </View>
          <View>
            <Seat />
            <Seat />
            <Seat />
            <Seat />
            <Seat />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Seat />
        <Seat />
        <Seat />
        <Seat />
        <Seat />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default SeatMap;
