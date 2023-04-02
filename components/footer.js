import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

export default function Footer({ props }) {
  const { footerStyle } = props;
  return <View style={footerStyle}></View>;
}
