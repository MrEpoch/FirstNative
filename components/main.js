import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "react-native";
import Button from "react-native-button";
import Ionicons from "@expo/vector-icons/Ionicons";
import Subject from "./subject.js";

export default function Main({ navigation }) {
  const srcIMGs = [
    { srcName: "Čeština", img: require("../assets/ČEŠTINAsub.jpg") },
    { srcName: "Matematika", img: require("../assets/MATEMATIKAsub.jpg") },
    { srcName: "Němčina", img: require("../assets/NĚMČINAsub.jpg") },
    { srcName: "SVN", img: require("../assets/SVNsub.jpg") },
    { srcName: "SDT", img: require("../assets/SDTsub.jpg") },
    { srcName: "Hardware", img: require("../assets/HARDWAREsub.jpg") },
    { srcName: "Programování", img: require("../assets/PROGRAMOVÁNÍsub.jpg") },
    { srcName: "Angličtina", img: require("../assets/ANGLIČTINAsub.jpg") },
  ];
  return (
      <View style={styles.containerMain}>
        <View style={styles.topInfo}>
          <Text style={styles.textMain}>Všechny předměty</Text>
          <Button>
            <Ionicons name="search" size={25} color={"white"} />
          </Button>
        </View>
        <ScrollView style={styles.scrollStyle}>
          {srcIMGs.map((imgSrc) => (
            <Button
              onPress={() => {
                navigation.navigate("Subject", {imgSrc});
              }}
              style={styles.clickImgBtn}
            >
              <Image style={styles.clickImg} source={imgSrc.img} />
            </Button>
          ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    height: "100%",
    width: "100%",
    margin: 0,
    padding: 0,
    flex: 1,
    backgroundColor: "black",
    color: "white",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  topInfo: {
    color: "white",
    height: "100%",
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  magnifyStyle: {
    width: 20,
    height: 20,
  },

  textMain: {
    color: "white",
    fontSize: 15,
    fontWeight: "300",
  },

  scrollStyle: {
    flexDirection: "column",
    height: "100%",
    flex: 1,
  },

  clickImgBtn: {
    width: "100%",
    height: 300,
    width: "40%",
    flex: 1,
    justifyContent: "center",
  },

  clickImg: {
    flex: 1,
    height: 500,
    width: "100%",
  },
});
