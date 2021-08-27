import React, { useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { theme } from './src/global/styles/theme';
import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';
import Preload from './src/screens/Preload';

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: theme.colors.background,
    }
}

const App = () => {

    const isDarkMode = useColorScheme() === 'dark';
    const [loadApp, setLoadApp] = useState(true);

    setTimeout(() => setLoadApp(false), 2000);

    return (
        <NavigationContainer theme={Theme}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            {loadApp ? <Preload /> :
            <AuthProvider>
                <Routes />
            </AuthProvider>
            }
        </NavigationContainer>
    );
};

export default App;
