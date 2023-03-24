import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import {Checkbox, TextInput} from 'react-native-paper';
import {useState} from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SizeBox from "../components/SizeBox";
import styles from '../styles/BasicTheme';
import {PageName} from "../utils/constant";
import ScrollView = Animated.ScrollView;
import {AntDesign, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";


export default function LoginScreen2(props) {
  const [text, setText] = useState("");
  const [text2, onChangeText] = useState('');
  const [checked, setChecked] = useState(false);

  function goHome() {
    return props.navigation.navigate(PageName.homeScreen);
  }

  return (
    <SafeAreaView style={[styles.container2, {backgroundColor: '#008FA0'}]}>
      <View style={styles.loginStyle1}>
        <Image source={require('../../assets/3123132.png')}/>
      </View>

      <ScrollView style={[styles.scrollView]}>
        <Text style={[styles.header, styles.colorWhite]}>Welcome back!</Text>



        <SizeBox h={10}/>
        <View style={styles.view1}>

          <SizeBox h={30}/>

          <View style={{}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/icon_05_1.png')}/>
            </View>


            <SizeBox h={100}/>

            <View style={styles.view2}>
              <TextInput
                style={styles.input2}
                onChangeText={setText}
                value={text}
                mode="outlined"
                // label={"Username"}
                right={<TextInput.Icon
                  icon={() =>
                    text == "" ? "" : <AntDesign name="checkcircleo" size={20} color={"white"}/>}
                />}
                left={<TextInput.Icon
                  icon={() =>
                    <MaterialCommunityIcons name="email-outline" size={20} color={"white"}/>}
                />}
                outlineStyle={styles.inputTextStyle4}
                placeholder={"Username"}
                // theme={{colors: {primary: 'white'}}}
                theme={{ colors: { text: 'white' } }}
                textColor={'white'}
                placeholderTextColor="#fff"
              />
              <TextInput
                style={styles.input3}
                onChangeText={onChangeText}
                value={text2}
                placeholder="password"
                keyboardType="numeric"
                mode="outlined"
                // label={"password"}
                outlineStyle={styles.inputTextStyle3}
                left={<TextInput.Icon
                  icon={() =>
                    <MaterialCommunityIcons name="lock-outline" size={20} color={"black"}/>}
                />}
                secureTextEntry

              />

              <SizeBox h={30}/>

              <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
                <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text>Remember me</Text>
                </View>
                <Text>Forgot Password?</Text>
              </View>
              <SizeBox h={30}/>

              <TouchableOpacity style={styles.btn3} onPress={() => goHome()}>
                {/*<Icon size={18} name="menu" color="#fff"/>*/}
                <Text style={styles.btnText}>Sign In</Text>
              </TouchableOpacity>
              <SizeBox h={20}/>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

