import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeComponent from './components/HomeComponent';
import PortfolioComponent from './components/PortfolioComponent';
import BlogComponent from './components/BlogComponent';

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Port') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'Blog') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName="Home">
      <Tab.Screen name="Port" component={PortfolioComponent} />
      <Tab.Screen name="Home" component={HomeComponent} />
      <Tab.Screen name="Blog" component={BlogComponent} />
    </Tab.Navigator>
  );
};

export default Main;
