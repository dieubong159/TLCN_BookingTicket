import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Image
} from "react-native";
import HeaderSlogan from "../components/HeaderSlogan";
import LoginMaterial from "../components/LoginMaterial";
import SignUpMaterial from "../components/SignUpMaterial";
import AccountTabButton from "../components/AccountTabButton";
import { MaterialIcons } from "@expo/vector-icons";
import AccountInfomation from "../components/AccountInfomation";
import { calcWidth, calcHeigt } from "../../responsive/ratio.responsive";

const AccountScreen = () => {
  const [editState, setEditState] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [registerState, setRegisterState] = useState(false);

  return (
    <KeyboardAvoidingView behavior='padding'>
      <View style={styles.screenContainer}>
        <View style={styles.headerContainer}>
          <HeaderSlogan />
          {loginState === false ? (
            <AccountTabButton setRegisterState={setRegisterState} />
          ) : null}
        </View>
        <View
          style={{
            marginTop: calcHeigt(18),
            position: "absolute",
            alignSelf: "center"
          }}
        >
          {loginState ? (
            <ImageBackground
              source={require("../../assets/potrait.jpg")}
              style={styles.userImage}
            >
              {editState ? null : (
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => setEditState(true)}
                >
                  <MaterialIcons name='edit' style={styles.vectorEditIcon} />
                </TouchableOpacity>
              )}
            </ImageBackground>
          ) : null}
        </View>
        <View style={styles.contentContainer}>
          {loginState ? (
            <AccountInfomation
              editState={editState}
              setEditState={setEditState}
              setLoginState={setLoginState}
            />
          ) : registerState ? (
            <SignUpMaterial />
          ) : (
            <LoginMaterial setLoginState={setLoginState} />
          )}

          <View style={{ marginTop: calcHeigt(0.5) }}>
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
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "white"
  },
  headerContainer: {
    height: calcHeigt(28),
    backgroundColor: "#7438FE",
    flexDirection: "column"
  },

  contentContainer: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: calcHeigt(70),
    marginHorizontal: calcWidth(8),
    marginVertical: calcHeigt(4)
  },

  functionButton: {
    marginTop: calcHeigt(1.5),
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#454F63",
    height: calcHeigt(5)
  },
  functionButtonImage: {
    height: calcHeigt(4),
    width: calcWidth(8),
    alignSelf: "center",
    marginHorizontal: calcWidth(10)
  },
  functionButtonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  },
  userImage: {
    height: calcHeigt(19),
    width: calcWidth(32),
    alignSelf: "center",
    justifyContent: "flex-end",
    borderRadius: 15
  },
  vectorEditIcon: {
    fontSize: 20,
    color: "black",
    alignSelf: "center"
  },
  editButton: {
    borderRadius: 30,
    height: calcHeigt(5),
    width: calcWidth(8),
    backgroundColor: "white",
    alignSelf: "flex-end",
    justifyContent: "center"
  }
});

export default AccountScreen;
