import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/Cart';
import MainTab from './MainTab';
import { theme } from '../global/styles/theme';

const Stack = createStackNavigator();

const MainStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='MainTab'
            mode='modal'
        >
            <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Carrinho',
                    headerStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    },
                    headerTitleStyle: {
                        fontFamily: theme.fonts.title700,
                        fontSize: 22,
                        color: theme.colors.heading,
                    },
                    headerTitleAlign: 'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStack;
