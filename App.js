import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useState} from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SizeBox from "./ui/components/SizeBox";
import styles from './ui/styles/BasicTheme';
import {NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./ui/screens/LoginScreen";
import LoginScreen2 from "./ui/screens/LoginScreen2";
import HomeScreen from "./ui/screens/HomeScreen";
import ViewScreen from "./ui/screens/ViewScreen";
import ViewScreenDetail from "./ui/screens/ViewScreenDetail";
import {PageName} from "./ui/utils/constant";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen
          name={PageName.loginScreen}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={PageName.loginScreen2}
          component={LoginScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={PageName.homeScreen}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={PageName.viewScreen}
          component={ViewScreen}
          options={{headerShown: true,
            title: 'Lake View',
            headerStyle: {
            justifyContent:'center',
              alignItems:'center'
            },
          }}

        />
        <Stack.Screen
          name={PageName.viewScreenDetail}
          component={ViewScreenDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

