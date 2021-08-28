import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Init from '../screens/Init';
import MainStack from './MainStack';
import ForgotPassword from '../screens/ForgotPassword';

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
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
    )
}

export default InitStack;
