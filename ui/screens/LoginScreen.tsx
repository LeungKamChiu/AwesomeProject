import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity, Animated, ImageBackground} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {useState} from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SizeBox from "../components/SizeBox";
import styles from '../styles/BasicTheme';
import {PageName} from "../utils/constant";
import {AntDesign} from "@expo/vector-icons";
import ScrollView = Animated.ScrollView;


export default function LoginScreen(props) {
  const [text2, onChangeText] = useState('');
  const [text3, onChangeText3] = useState('');
  const [number, onChangeNumber] = useState('');
  const [checked, setChecked] = useState(false);

  function goHome() {
    return props.navigation.navigate(PageName.loginScreen2);
  }

  return (
    <SafeAreaView style={[styles.container2]}>
      <View style={styles.loginStyle1}>
        <Image source={require('../../assets/Earth.png')}/>
      </View>
      <ScrollView style={[styles.scrollView]}>

        <View style={{}}>
          <Text style={styles.header}>Let’s start your</Text>
          <Text style={styles.header}>Journey together!</Text>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/icon_05_1.png')}/>
          </View>
          <SizeBox h={100}/>


          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text2}
            mode="outlined"
            label={"Username"}
            right={<TextInput.Icon
              icon={() =>
                text2 == "" ? "" : <AntDesign name="checkcircleo" size={20} color={"green"}/>}
            />}
            outlineStyle={styles.inputTextStyle9}
            theme={{colors: {primary: 'black'}}}
          />
          <SizeBox h={10}/>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText3}
            value={text3}
            mode="outlined"
            label={"Username"}
            right={<TextInput.Icon
              icon={() =>
                text3 == "" ? "" : <AntDesign name="checkcircleo" size={20} color={"green"}/>}
            />}
            outlineStyle={styles.inputTextStyle9}
            theme={{colors: {primary: 'black'}}}
          />
          <SizeBox h={10}/>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder=""
            keyboardType="numeric"
            mode="outlined"
            label={"Password"}
            outlineStyle={styles.inputTextStyle9}
            theme={{colors: {primary: 'black'}}}
            secureTextEntry
          />
          <SizeBox h={10}/>

          <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
            <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                theme={{colors: {primary: '#008FA0'}}}
              />
              <Text>Remember me</Text>
            </View>
            <Text>Forgot Password?</Text>
          </View>
          <SizeBox h={30}/>
          <View>

            <TouchableOpacity style={styles.btn3} onPress={() => goHome()}>
              {/*<Icon size={18} name="menu" color="#fff"/>*/}
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <SizeBox h={20}/>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text>Don't have an Account?</Text>
            </View>
            <SizeBox h={20}/>

            <TouchableOpacity style={styles.btn4} onPress={() => goHome()}>
              {/*<Icon size={18} name="menu" color="#fff"/>*/}
              <Text style={styles.btnText2}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <SizeBox h={30}/>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

