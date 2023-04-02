import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Menu from "../assets/menu.png";
import Magnify from "../assets/magnify.png";
import * as React from "react";
import Button from "react-native-button";

export default function Navbar({ navigation }) {
  const { navbarStyle } = styles;
  const { menuStyle } = styles;
  const { navbarTextStyle } = styles;
  const { magnifyStyles } = styles;
  const { menuContainer } = styles;
  return (
    <View style={navbarStyle}>
      <Button
        style={menuContainer}
        onPress={() => navigation.navigate("Details")}
      >
        <Image style={menuStyle} source={Menu} />
      </Button>
      <Text></Text>
      <Text style={navbarTextStyle}>Všechno učivo</Text>
      <Image style={magnifyStyles} source={Magnify} />
    </View>
  );
}

const styles = StyleSheet.create({
  menuStyle: {
    width: 40,
    height: 40,
  },

  menuContainer: {
    flex: 1,
    width: 100,
    justifyContent: "center",
  },

  magnifyStyles: {
    width: 30,
    height: 30,
  },

  navbarStyle: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    height: "10%",
    width: "100%",
    flexDirection: "row",
  },

  navbarTextStyle: {
    left: "30%",
    fontWeight: "700",
    fontSize: 16,
    color: "black",
    position: "absolute",
  },
});
