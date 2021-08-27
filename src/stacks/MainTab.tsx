import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Order from '../screens/Order';
import Search from '../screens/Search';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default () => (
    <Tab.Navigator
        initialRouteName='Home'
        tabBar={props=> <CustomTabBar {...props} />}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Order" component={Order} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);
