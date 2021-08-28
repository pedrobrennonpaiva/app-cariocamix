import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';
import { theme } from '../global/styles/theme';
import Coupons from '../screens/Coupons';
import PaymentTypes from '../screens/PaymentTypes';
import Addresses from '../screens/Addresses';
import ProfileDetails from '../screens/ProfileDetails';

const Stack = createStackNavigator();

const MainStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='MainTab'
            mode='card'
        >
            <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
            <Stack.Screen
                name="Coupons"
                component={Coupons}
                options={{
                    headerTitle: 'Meus Cupons',
                    headerTitleStyle: {
                        fontFamily: theme.fonts.text500,
                        fontSize: 18,
                        marginTop: 5,
                    }
                }}
            />
            <Stack.Screen
                name="PaymentTypes"
                component={PaymentTypes}
                options={{
                    headerTitle: 'Formas de pagamento',
                    headerTitleStyle: {
                        fontFamily: theme.fonts.text500,
                        fontSize: 18,
                        marginTop: 5,
                    }
                }}
            />
            <Stack.Screen
                name="Addresses"
                component={Addresses}
                options={{
                    headerTitle: 'Meus endereços',
                    headerTitleStyle: {
                        fontFamily: theme.fonts.text500,
                        fontSize: 18,
                        marginTop: 5,
                    }
                }}
            />
            <Stack.Screen
                name="ProfileDetails"
                component={ProfileDetails}
                options={{
                    headerTitle: 'Meu perfil',
                    headerTitleStyle: {
                        fontFamily: theme.fonts.text500,
                        fontSize: 18,
                        marginTop: 5,
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStack;
