import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import {TextInput} from 'react-native-paper';
import {useState} from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SizeBox from "../components/SizeBox";
import styles from '../styles/BasicTheme';
import {AntDesign, FontAwesome, FontAwesome5} from "@expo/vector-icons";
import {PageName} from "../utils/constant";


export default function ViewScreen(props) {
  const [text, setText] = useState("");
  const [text2, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
  const [bookMark, setBookMark] = useState(false);

  function goHome() {
    return props.navigation.navigate(PageName.viewScreenDetail, {item:props.route?.params?.item});
  }


  function bookMarkFun() {
    setBookMark(!bookMark);
  }

  return (
    <SafeAreaView style={styles.container2}>
      <Image source={require('../../assets/Rectangle_9.png')} />
      <SizeBox h={10}/>
      <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
      <Text style={[styles.boldText,styles.fontSize_20]}>{props.route?.params?.item?.name}</Text>
      <Text>
        <FontAwesome name="star" color={"#E1D800"} size={15}/>
        <Text>{props.route?.params?.item?.ranking}</Text>
      </Text>
      </View>
      <SizeBox h={10}/>
      <Text><Ionicons name="location-sharp" size={15}/>
        <Text>{props.route?.params?.item?.location}</Text></Text>

      <SizeBox h={10}/>
      <Text style={{fontWeight:400,lineHeight:18, fontSize:15 }}>What is Redfish Lake known for?
        Redfish Lake is the final stop on the longest
        Pacific salmon run in North America, which
        requires long-distance swimmers, such as
        Sockeye and Chinook Salmon, to travel over
        900 miles upstream to return to their spawning
        grounds.
        Redfish Lake is an alpine lake in Custer County,
        Idaho, just south of Stanley. It is the largest lake
        within the Sawtooth National Recreation Area.</Text>

      <SizeBox h={10}/>
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
      <View style={[styles.btnView]}>
        <TouchableOpacity style={styles.btn2} onPress={() => goHome()}>
          {/*<Icon size={18} name="menu" color="#fff"/>*/}
          <Text style={[styles.whireColor,
            styles.boldText, styles.fontSize_20]}>Booking Now | ${props.route?.params?.item?.price}</Text>
        </TouchableOpacity>
      </View>
        <SizeBox w={5}/>
        <TouchableOpacity onPress={() => bookMarkFun()}>
          <AntDesign name={bookMark?"heart" : "hearto"} size={40} color={bookMark?"red" : "lightgrey"}></AntDesign>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

