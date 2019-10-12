import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import HeaderBooking from "../components/HeaderBooking";
import RouteDetail from "../components/RouteDetail";
import { AntDesign } from "@expo/vector-icons";
import SeatMap from "../components/SeatMap";

const SeatScreen = ({ navigation }) => {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.backgroundImageStyle}
        source={require("../../assets/background.png")}
      >
        <HeaderBooking navigation={navigation} title='Chọn chỗ ngồi của bạn' />
        <RouteDetail action={true} />

        <View style={styles.informationContainer}>
          <AntDesign name='infocirlceo' style={styles.logoInfomation} />
          <Text style={styles.informationText}>Nhấn 1 lần nữa để bỏ chọn</Text>
        </View>
      </ImageBackground>

      <View style={styles.seatContainer}>
        <View style={{ flexDirection: "row", marginLeft: 15 }}>
          <TouchableOpacity style={styles.floorTabButton}>
            <Text style={styles.floorTabButtonText}>TẦNG 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.floorTabButton}>
            <Text style={styles.floorTabButtonText}>TẦNG 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.propBackgroundStyle}>
          <View style={styles.seatNotificationContainer}>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#A9ACBB",
                  width: 20,
                  height: 20,
                  marginRight: 5,
                  alignSelf: "center"
                }}
              />
              <Text style={{ color: "#A9ACBB", fontSize: 15 }}>Đã đặt</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#A9ACBB",
                  width: 20,
                  height: 20,
                  marginRight: 5,
                  alignSelf: "center"
                }}
              />
              <Text style={{ color: "#A9ACBB" }}>Trống</Text>
            </View>
            <View style={{ marginRight: 10, flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "#F7B10A",
                  width: 20,
                  height: 20,
                  marginRight: 5,
                  alignSelf: "center"
                }}
              />
              <Text style={{ color: "#A9ACBB" }}>Đang chọn</Text>
            </View>
          </View>
          <SeatMap />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ConfirmBooking")}>
          <View style={styles.bookingTicketButtonStyle}>
            <Text style={styles.buttonTitleStyle}>Đặt vé</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "row",
    flex: 1
  },
  backgroundImageStyle: {
    width: 400,
    height: 400,
    position: "relative",
    alignSelf: "flex-start"
  },
  informationContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
    // flex: 1
  },
  logoInfomation: {
    fontSize: 18,
    marginRight: 10,
    alignSelf: "center",
    color: "white"
  },
  informationText: {
    fontSize: 15,
    color: "white"
  },
  propBackgroundStyle: {
    backgroundColor: "white",
    alignSelf: "center",
    height: 305,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    // marginTop: 100,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
    borderColor: "#C7B0FA"
  },
  bookingTicketButtonStyle: {
    width: 330,
    height: 40,
    backgroundColor: "#F7B10A",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    marginVertical: 15
  },
  buttonTitleStyle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  floorTabButton: {
    height: "100%",
    width: 100,
    alignItems: "flex-start",
    backgroundColor: "#665EFF",
    padding: 5,
    marginLeft: 2,
    borderRadius: 8
  },
  floorTabButtonText: {
    color: "white"
  },
  seatContainer: {
    position: "absolute",
    marginBottom: 30,
    alignSelf: "flex-end"
  },
  seatNotificationContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default SeatScreen;
