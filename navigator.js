import { StatusBar as Bar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/main.js";
import Settings from "./components/settings.js";
import Ionicons from '@expo/vector-icons/Ionicons';
import Subject from "./components/subject.js";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    initialRouteName="All"
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Stack.Screen name="Home" component={Navigator} />
    <Stack.Screen name="Subject" component={Subject} />
  </Stack.Navigator>
  )
}

function Navigator() {


  const Tab = createBottomTabNavigator()


    return (
        <Tab.Navigator
      
      screenOptions={
        ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'dodgerblue',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
        },

      }
      )
      }
    >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>

    );
}

