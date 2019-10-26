import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import BackButton from "../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import RadioForm from "react-native-simple-radio-button";
import PersonalInfoInput from "../components/PersonalInfoInput";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

const ConfirmBookingScreen = ({ navigation }) => {
  var payment_methods = [
    { label: "Trực tiếp", value: 0 },
    { label: "Chuyển khoản", value: 1 }
  ];

  const [state, setState] = useState(0);
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.backgroundImageStyle}
        source={require("../../assets/background.png")}
      >
        <BackButton navigation={navigation} />
        <Text style={styles.headerTitle}>Thông tin đặt vé</Text>

        <View style={styles.routeContainer}>
          <View
            style={{ marginHorizontal: 10, justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", marginVertical: calcHeigt(0.5) }}
            >
              <Text style={{ marginRight: calcWidth(3), fontSize: 15 }}>
                4:30AM
              </Text>
              <Text style={{ color: "#A9ACBB", fontSize: 15 }}>12:00PM</Text>
            </View>
            <Text style={{ fontSize: 15, marginVertical: calcHeigt(0.5) }}>
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
            <Text style={{ fontSize: 12 }}>A1, A2, A3</Text>
            <Text style={{ color: "#F7B10A", fontSize: 16, marginTop: 10 }}>
              250.000 VNĐ
            </Text>
            <Text style={{ color: "#A9ACBB" }}>5:30 Giờ</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.propBackgroundStyle}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: calcHeigt(1)
            }}
          >
            <AntDesign name='infocirlceo' style={styles.infoIcon} />
            <Text style={{ fontSize: 16 }}>
              Kiểm tra thông tin trước khi xác nhận
            </Text>
          </View>

          <PersonalInfoInput placeholder='Họ và tên' />
          <PersonalInfoInput placeholder='Số điện thoại' />
          <PersonalInfoInput placeholder='Email' />
          <PersonalInfoInput placeholder='Nhập lại email' />
          <PersonalInfoInput placeholder='CMND/ Hộ chiếu' />

          <Text
            style={{
              fontSize: 15,
              marginVertical: 5,
              marginLeft: 10,
              alignSelf: "flex-start"
            }}
          >
            Chọn phương thức thanh toán
          </Text>
          <RadioForm
            radio_props={payment_methods}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={"black"}
            animation={true}
            onPress={value => setState({ value: value })}
            radioStyle={{ paddingRight: 25, fontSize: 13, marginTop: 10 }}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.confirmButtonStyle}>
            <Text style={styles.buttonTitleStyle}>Xác nhận đặt vé</Text>
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
    width: "100%",
    height: calcHeigt(50),
    position: "relative",
    alignSelf: "flex-start"
  },
  headerTitle: {
    fontSize: 25,
    alignSelf: "center",
    marginVertical: calcHeigt(1.5),
    color: "white"
  },
  routeContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: calcWidth(5),
    flexDirection: "row",
    padding: calcWidth(1.2),
    paddingRight: calcWidth(3.5),
    marginBottom: calcHeigt(1.7),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: calcHeigt(0.8) },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    marginTop: calcHeigt(0.9)
  },
  contentContainer: {
    position: "absolute",
    marginBottom: calcHeigt(9),
    alignSelf: "flex-end"
    // flexDirection: "row"
  },
  propBackgroundStyle: {
    height: calcHeigt(54),
    width: calcWidth(90),
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    marginLeft: calcWidth(5),
    padding: calcWidth(1),
    paddingRight: calcWidth(4),
    marginVertical: calcHeigt(0.9),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: calcHeigt(0.7) },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    flex: 1
  },
  confirmButtonStyle: {
    width: calcWidth(80),
    height: calcHeigt(7),
    backgroundColor: "#F7B10A",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    marginVertical: calcHeigt(1.8)
  },
  buttonTitleStyle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  infoIcon: {
    fontSize: 25,
    alignSelf: "center",
    marginVertical: calcHeigt(1.8),
    marginRight: calcWidth(2.5)
  }
});

export default ConfirmBookingScreen;
