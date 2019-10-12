import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import SearchPropButton from "../components/SearchPropButton";

const FindTicketScreen = ({ navigation }) => {
  return (
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
          marginBottom: 30,
          alignSelf: "flex-end"
        }}
      >
        <View style={styles.propBackgroundStyle}>
          <SearchPropButton placeholder='Địa điểm đi' iconname='location' />
          <SearchPropButton placeholder='Địa điểm đến' iconname='location' />
          <SearchPropButton placeholder='Ngày đi' iconname='calendar' />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Route")}>
          <View style={styles.findTicketButtonStyle}>
            <Text style={styles.buttonTitleStyle}>Tìm vé</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImageStyle: {
    width: 400,
    height: 400,
    position: "relative",
    alignSelf: "flex-start"
  },
  sloganContainerStyle: {
    marginTop: 100
  },
  sloganStyle: {
    fontSize: 30,
    color: "white",
    alignSelf: "center"
  },
  propBackgroundStyle: {
    backgroundColor: "white",
    alignSelf: "center",
    height: 300,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 100,
    borderWidth: 2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    borderColor: "#C7B0FA"
  },
  findTicketButtonStyle: {
    width: 330,
    height: 60,
    backgroundColor: "#7438FE",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 15,
    marginVertical: 20
  },
  buttonTitleStyle: {
    flex: 1,
    color: "white",
    fontSize: 20,
    textAlign: "center"
  }
});

export default FindTicketScreen;
