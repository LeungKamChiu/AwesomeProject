import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity, Animated} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SizeBox from "../components/SizeBox";
import styles from '../styles/BasicTheme';
import {AntDesign, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import CustomeDateRangePicker from "../components/CustomeDateRangePicker";
import ScrollView = Animated.ScrollView;
import {PageName, SystemColor} from "../utils/constant";
import WixCalendar2 from "../components/WixCalendar2";


export default function ViewScreenDetail(props) {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [totalDate, setTotalDate] = useState(0);
  console.log('sdfsdfds ' + JSON.stringify(props));

  function goHome() {
    return props.navigation.navigate("login2");
  }

  console.log('dsfdsfds ' + JSON.stringify(props.route?.params));

  function bookMarkFun() {
    return props.navigation.navigate(PageName.loginScreen);
  }


  return (
    <SafeAreaView style={styles.container2}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('../../assets/Rectangle_9.png')}/>
        <SizeBox h={10}/>

        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
        <Text style={styles.boldText}>Select dates</Text>
        <View style={[{flexDirection: 'row'}]}>
        <Text>{'< '}</Text>
        <Text>March</Text>
        <Text>{' >'}</Text>
        </View>
        </View>
        <SizeBox h={10}></SizeBox>

        <WixCalendar2 setTotalDate={setTotalDate}/>
        <SizeBox h={10}></SizeBox>
        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
          <Text>{totalDate} nights</Text>
          <Text style={styles.colorBlue}>$ {totalDate * props.route?.params?.item?.price}</Text>
        </View>
        <SizeBox h={10}></SizeBox>
        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
          <Text>Tax</Text>
          <Text style={styles.colorBlue}>$ 65</Text>
        </View>
        <SizeBox h={10}></SizeBox>
        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
          <Text>Total</Text>
          <Text style={styles.colorBlue}>$ {totalDate * props.route?.params?.item?.price + 65}</Text>
        </View>
        <SizeBox h={10}></SizeBox>
        <TextInput
          label="Full Name"
          value={text1}
          mode="outlined"
          outlineStyle={styles.inputTextStyle9}
          style={styles.input}
          theme={{ colors: { primary: 'black' } }}
          onChangeText={setText1}

        />
        <TextInput
          label="Address"
          value={text2}
          mode="outlined"
          outlineStyle={styles.inputTextStyle9}
          style={styles.input}
          theme={{ colors: { primary: 'black' } }}
          onChangeText={setText2}

        />
        <TextInput
          label="Email"
          value={text3}
          mode="outlined"
          style={styles.input}
          outlineStyle={styles.inputTextStyle9}
          theme={{ colors: { primary: 'black' } }}
          onChangeText={setText3}

        />

        <SizeBox h={10}></SizeBox>

        <TouchableOpacity style={styles.btn3} onPress={() => bookMarkFun()}>
          {/*<Icon size={18} name="menu" color="#fff"/>*/}
          <Text style={styles.btnText}>Make Reservation</Text>
        </TouchableOpacity>
        <SizeBox h={10}></SizeBox>

      </ScrollView>


    </SafeAreaView>
  );
};

