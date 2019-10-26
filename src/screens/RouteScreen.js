import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import RouteDetail from "../components/RouteDetail";
import HeaderBooking from "../components/HeaderBooking";
import { calcHeigt } from "../../responsive/ratio.responsive";

const RouteScreen = ({ navigation }) => {
  // console.log(navigation.state.routeName);
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        style={styles.backgroundImageStyle}
        source={require("../../assets/background.png")}
      >
        <HeaderBooking navigation={navigation} title='Chọn tuyến xe của bạn' />
        <RouteDetail navigation={navigation} />
        <RouteDetail navigation={navigation} />
        <RouteDetail navigation={navigation} />
        <RouteDetail navigation={navigation} />
        <RouteDetail navigation={navigation} />
        <RouteDetail navigation={navigation} />
        <RouteDetail navigation={navigation} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "row"
  },
  backgroundImageStyle: {
    width: "100%",
    height: calcHeigt(50),
    position: "relative",
    alignSelf: "flex-start"
  }
});

export default RouteScreen;
