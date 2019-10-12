import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import HeaderSlogan from "../components/HeaderSlogan";
import LoginMaterial from "../components/LoginMaterial";
import SignUpMaterial from "../components/SignUpMaterial";

const AccountScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <HeaderSlogan />
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>ĐĂNG KÝ</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <SignUpMaterial />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.functionButton}>
            <Image
              style={styles.functionButtonImage}
              source={require("../../assets/vietnam.png")}
            />
            <Text style={styles.functionButtonText}>NGÔN NGỮ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.functionButton}>
            <Image
              style={styles.functionButtonImage}
              source={require("../../assets/team.png")}
            />
            <Text style={styles.functionButtonText}>GIỚI THIỆU</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.functionButton}>
            <Image
              style={styles.functionButtonImage}
              source={require("../../assets/contact-us.png")}
            />
            <Text style={styles.functionButtonText}>TRUNG TÂM HỖ TRỢ</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  headerButtonContainer: {
    height: 40,
    flexDirection: "row",
    bottom: 0,
    top: 148,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    shadowColor: "#000000",
    elevation: 1
  },
  headerButton: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  headerButtonText: {
    fontSize: 16,
    alignSelf: "center",
    color: "#454F63"
  },

  contentContainer: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 450,
    marginHorizontal: 30,
    marginVertical: 30
  },

  functionButton: {
    marginTop: 15,
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#454F63",
    height: 45
  },
  functionButtonImage: {
    height: 30,
    width: 30,
    alignSelf: "center",
    marginHorizontal: 25
  },
  functionButtonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  }
});

export default AccountScreen;
