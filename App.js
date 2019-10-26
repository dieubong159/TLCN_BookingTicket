import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FindTicketScreen from "./src/screens/FindTicketScreen";
import TicketManagementScreen from "./src/screens/TicketManagementScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { FontAwesome, Foundation, EvilIcons } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation-stack";
import RouteScreen from "./src/screens/RouteScreen";
import SeatScreen from "./src/screens/SeatScreen";
import ConfirmBookingScreen from "./src/screens/ConfirmBookingScreen";

const navigator = createStackNavigator(
  {
    FindTicket: {
      screen: createMaterialBottomTabNavigator(
        {
          FindTicket: {
            screen: FindTicketScreen,
            navigationOptions: {
              tabBarLabel: "Tìm vé",
              tabBarIcon: ({ tintColor }) => (
                <FontAwesome name='search' color={tintColor} size={30} />
              )
            }
          },
          TicketManagement: {
            screen: TicketManagementScreen,
            navigationOptions: {
              tabBarLabel: "Quản lý vé",
              tabBarIcon: ({ tintColor }) => (
                <Foundation name='ticket' color={tintColor} size={30} />
              )
            }
          },
          Account: {
            screen: AccountScreen,
            navigationOptions: {
              tabBarLabel: "Tài khoản",
              tabBarIcon: ({ tintColor }) => (
                <EvilIcons name='user' color={tintColor} size={30} />
              )
            }
          }
        },
        {
          // initialRouteName: "FindTicket",
          order: ["FindTicket", "TicketManagement", "Account"],
          shifting: true,
          barStyle: {
            backgroundColor: "#EEEEEE"
          },
          activeColor: "#77D9E1",
          inactiveColor: "#181A1A"
        }
      ),
      navigationOptions: {
        header: null
      }
    },
    Route: RouteScreen,
    Seat: SeatScreen,
    ConfirmBooking: ConfirmBookingScreen
  },
  {
    initialRouteName: "FindTicket",
    headerMode: "screen",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(navigator);
