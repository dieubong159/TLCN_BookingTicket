import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import SearchPropButton from "../components/SearchPropButton";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";

const FindTicketScreen = ({ navigation }) => {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startTime, setStartTime] = useState("");

  // console.log(startLocation);
  // console.log(endLocation);
  // console.log(startTime);
  return (
    <KeyboardAvoidingView behavior='height'>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "row"
        }}
      >
        <ImageBackground
          style={styles.backgroundImageStyle}
          source={require("../../assets/background.png")}
        >
          <View style={styles.sloganContainerStyle}>
            <Text style={styles.sloganStyle}>Chào mừng</Text>
            <Text style={styles.sloganStyle}>Khởi hành cùng chúng tôi</Text>
          </View>
        </ImageBackground>
        <View
          style={{
            position: "absolute",
            marginBottom: calcHeigt(5),
            alignSelf: "flex-end"
          }}
        >
          <View style={styles.propBackgroundStyle}>
            <SearchPropButton
              placeholder='Địa điểm đi'
              iconname='location'
              setContent={setStartLocation}
              content={startLocation}
            />
            <SearchPropButton
              placeholder='Địa điểm đến'
              iconname='location'
              content={endLocation}
              setContent={setEndLocation}
            />
            <SearchPropButton
              placeholder='Ngày đi'
              iconname='calendar'
              content={startTime}
              setContent={setStartTime}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Route")}>
            <View style={styles.findTicketButtonStyle}>
              <Text style={styles.buttonTitleStyle}>Tìm vé</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backgroundImageStyle: {
    width: "100%",
    height: calcHeigt(50),
    position: "relative",
    alignSelf: "flex-start"
  },
  sloganContainerStyle: {
    marginTop: calcHeigt(13.5)
  },
  sloganStyle: {
    fontSize: 25,
    color: "white",
    alignSelf: "center"
  },
  propBackgroundStyle: {
    backgroundColor: "white",
    alignSelf: "center",
    height: calcHeigt(40),
    width: calcWidth(87),
    paddingHorizontal: calcWidth(2),
    paddingVertical: calcHeigt(2),
    borderRadius: 15,
    marginTop: calcHeigt(17),
    borderWidth: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    borderColor: "#C7B0FA"
  },
  findTicketButtonStyle: {
    width: calcWidth(87),
    height: calcHeigt(7.3),
    backgroundColor: "#7438FE",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    marginVertical: calcHeigt(3.5)
  },
  buttonTitleStyle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});

export default FindTicketScreen;
