import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Init from '../screens/Init';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const InitStack = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Init" component={Init} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
    )
}

export default InitStack;
