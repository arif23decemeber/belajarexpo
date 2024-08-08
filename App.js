import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 
import PagerView from 'react-native-pager-view';
import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <PagerView initialPage={0}>
            <View key="1" style={{ margin:15 }}>
              <View style={{ backgroundColor: '#111', width:'100%', padding:20, height:200, borderRadius:20 }}>
                <Text style={{color:'#fff'}}>Tulis Ide Kamu Hari Ini...</Text>
              </View>
            </View>
            <View key="2" style={{ margin:15 }}>
              <View style={{ backgroundColor: '#111', width:'100%', padding:20, height:200, borderRadius:20 }}>
                <Text style={{color:'#fff'}}>Tulis Ide Kamu Hari Ini...</Text>
              </View>
            </View>
            <View key="3" style={{ margin:15 }}>
              <View style={{ backgroundColor: '#111', width:'100%', padding:20, height:200, borderRadius:20 }}>
                <Text style={{color:'#fff'}}>Tulis Ide Kamu Hari Ini...</Text>
              </View>
            </View>
          </PagerView>
          <View style={{ padding:15 }}>
            <Text>Additional content goes here</Text>
            <Text>More content...</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: '100%', 
    borderRadius: 15, // Add border radius
    overflow: 'hidden', // Ensure the image is clipped to the border radius
  }
});

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <Text>Notifications</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <Text>Settings</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="tomato"/>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
  
            // Return the icon component
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: true, // Menghilangkan header pada tab
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Notifications" component={NotificationsScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
