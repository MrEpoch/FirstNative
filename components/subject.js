import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";

export default function Subject( { route } ) {
  return (
    <View style={styles.containerMain}>
        <Text style={styles.subjectText}>{route.params.imgSrc.srcName} bude tady</Text>
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    subjectText: {
        color: "white",
    }
});
