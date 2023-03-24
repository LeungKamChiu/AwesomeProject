import {StatusBar} from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useState} from "react";
import {SafeAreaView, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SizeBox from "../components/SizeBox";
import styles from '../styles/BasicTheme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import * as Icon from '../components/Icon';
import Svg, {G, Path} from 'react-native-svg';
import {AntDesign, EvilIcons, FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';
import {PageName, SystemColor} from "../utils/constant";
import {Searchbar} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {getImageSource} from "../utils/funs";



export default function HomeScreen(props) {
  const [text, setText] = useState("");
  const [text2, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
  const [dataSource, setDataSource] = useState([]);
  const Tab = createBottomTabNavigator();
  const [searchQuery, setSearchQuery] = useState('');

  useState(() => {
    let items = Array.apply(null, Array(4)).map((v, i) => {
      return {id: i, name: 'RedFish  Lake ' + i,
        ranking: 2.5+i,
        location: 'Canada ' + i,
        price: 40 + i,
        image:i,
      };
    });
    setDataSource(items);
  })

  const onChangeSearch = (search) => {
    setSearchQuery(search);
    let items = Array.apply(null, Array(4)).map((v, i) => {
      return {id: i, name: 'RedFish  Lake ' + i, ranking: 4.5, location: 'Canada', price: 40};
    });
    const result = items.filter(word => word.name.includes(search));

    setDataSource(result);
  };


  function HomeScreen() {
    return (
      <SafeAreaView style={styles.container3}>
        <View style={{
          // backgroundColor:'green'
        }}>
          <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{width: '80%', backgroundColor: 'white'}}
            />
            <SizeBox w={5}/>
            <TouchableOpacity
              onPress={() => console.log('Pressed')}
              style={styles.homeStyle2}
            >
              <FontAwesome name="search" size={16} color={"black"}></FontAwesome>
            </TouchableOpacity>
          </View>
          <SizeBox h={10}></SizeBox>
          <Text style={[styles.fontSize_20, styles.boldText]}>Top Resort</Text>
          <SizeBox h={10}></SizeBox>
          <FlatList
            data={dataSource}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate(PageName.viewScreen, {item:item})
                }
              >
                <View style={styles.homeStyle1}>
                  <Image style={styles.imageThumbnail} source={getImageSource(item.image)}/>
                  <SizeBox h={10}></SizeBox>
                  <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
                    <Text style={styles.boldText}>{item.name}</Text>
                    <Text><FontAwesome name="star" color={"#E1D800"}/>{item.ranking}</Text>
                  </View>
                  <SizeBox h={10}></SizeBox>
                  <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
                    <Text><Ionicons name="location-sharp"/>{item.location}</Text>
                    <View style={{flexDirection: 'row'}}><Text style={styles.color}>${item.price}</Text><Text> /Visit</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
      </SafeAreaView>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: SystemColor.color,
      }}>
      <Tab.Screen name="Home"
                  component={HomeScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size}/>
        ),
        headerShown: false
      }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="location-sharp" size={size} color={color}/>
        ),
        headerShown: false
      }}/>
      <Tab.Screen name="Settings1" component={SettingsScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="message-processing" size={size} color={color}/>

        ),
        headerShown: false

      }}/>
      <Tab.Screen name="Settings2" component={SettingsScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="cards-heart" color={color} size={size}/>
        ),
        headerShown: false

      }}/>
      <Tab.Screen name="Settings3" component={SettingsScreen} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
          <Ionicons name="person" color={color} size={size}/>
        ),
        headerShown: false

      }}/>
    </Tab.Navigator>
  );
};

