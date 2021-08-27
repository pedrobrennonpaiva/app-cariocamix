import { faChevronRight, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = {
    title: string;
    subtitle: string;
    screenName: string;
    icon: IconDefinition;
}

export const ItemMenuProfile = ({ title, subtitle, screenName, icon }: Props) => {

    const navigation = useNavigation();

    const handleTo = (name: string) => {
        navigation.navigate(name);
    }

    return (
        <View style={styles.container}>
            <RectButton
                onPress={() => handleTo(screenName)}
                style={styles.buttonMenu}
            >
                <FontAwesomeIcon
                    icon={icon}
                    style={styles.icon}
                    size={22}
                />
                <View style={styles.viewTitles}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.subTitle}>
                        {subtitle}
                    </Text>
                </View>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    style={styles.iconGoto}
                    size={15}
                />
            </RectButton>
        </View>
    )
}

