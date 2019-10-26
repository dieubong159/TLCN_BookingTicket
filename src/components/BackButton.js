import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { calcHeigt, calcWidth } from "../../responsive/ratio.responsive";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const BackButton = ({ navigation }) => {
  return (
    <View style={styles.headerButtonContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name='md-arrow-round-back' style={styles.logoButton} />
      </TouchableOpacity>
      <View style={{ flex: 8 }}></View>
      {navigation.state.routeName === "Route" ? (
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Seat")}
        >
          <FontAwesome name='filter' style={styles.filterLogo} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    borderRadius: 50,
    height: calcHeigt(6.5),
    width: calcWidth(12),
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: calcWidth(2),
    borderColor: "#212121",
    borderWidth: 1.5,
    flex: 1
  },
  filterLogo: {
    fontSize: 20,
    color: "#000000",
    alignSelf: "center"
  },
  backButton: {
    borderRadius: 50,
    height: calcHeigt(6.5),
    width: calcWidth(12),
    justifyContent: "center",
    backgroundColor: "#6947FC",
    padding: calcWidth(2),
    flex: 1
  },
  headerButtonContainer: {
    marginTop: calcHeigt(5),
    marginHorizontal: calcWidth(5),
    flexDirection: "row"
  },
  logoButton: {
    fontSize: 22,
    color: "#FFFFFF",
    alignSelf: "center"
  }
});

export default BackButton;
