import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
    height: 40,
    width: 40,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 7,
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
    height: 40,
    width: 40,
    justifyContent: "center",
    backgroundColor: "#6947FC",
    padding: 7,
    flex: 1
  },
  headerButtonContainer: {
    marginTop: 35,
    marginHorizontal: 20,
    flexDirection: "row"
  },
  logoButton: {
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center"
  }
});

export default BackButton;
