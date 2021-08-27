import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClipboardList, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type Props = BottomTabBarProps & {}

export default ({ state, navigation }: Props) => {

    const goTo = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles().tabArea}>
            <TouchableOpacity onPress={()=>goTo('Home')} style={styles().tabItem}>
                <FontAwesomeIcon
                    icon={faHome}
                    style={styles(state.index, 0).icon}
                    size={25}
                />
                <Text style={styles(state.index, 0).tabText}>
                    Início
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('Search')} style={styles().tabItem}>
                <FontAwesomeIcon
                    icon={faSearch}
                    style={styles(state.index, 1).icon}
                    size={25}
                />
                <Text style={styles(state.index, 1).tabText}>
                    Busca
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('Order')} style={styles().tabItem}>
                <FontAwesomeIcon
                    icon={faClipboardList}
                    style={styles(state.index, 2).icon}
                    size={25}
                />
                <Text style={styles(state.index, 2).tabText}>
                    Pedidos
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>goTo('Profile')} style={styles().tabItem}>
                <FontAwesomeIcon
                    icon={faUser}
                    style={styles(state.index, 3).icon}
                    size={25}
                />
                <Text style={styles(state.index, 3).tabText}>
                    Perfil
                </Text>
            </TouchableOpacity>
        </View>
    );
}
