import React, { useState } from "react";
import { StatusBar as Bar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./navigator";

export default function App() {

  return (
    <NavigationContainer>
      <Navigator />
      <Bar backgroundColor="darkgray"/>
    </NavigationContainer>
  );
}
