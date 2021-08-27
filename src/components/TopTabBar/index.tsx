import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import ModalCartCustom from '../ModalCartCustom';

export const TopTabBar = () => {

    const { user, cart } = useAuth();
    const navigation = useNavigation();

    const [openModalCart, setOpenModalCart] = useState(false);

    const handleCart = () => {
        setOpenModalCart(true);
        // navigation.navigate('Cart');
    }

    const handleLogin = () => {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewLeft}>
                {user.id ?
                <>
                    <Text style={styles.textTop}>Olá, {user.name}!</Text>
                    <Text style={styles.textSecondary}>O que você vai pedir hoje?</Text>
                </> :
                <>
                    <Text style={styles.textTop}>Olá, Visitante!</Text>

                    <TouchableOpacity
                        onPress={() => handleLogin()}
                    >
                        <Text style={styles.textSecondary}>
                            Faça login ou cadastre-se
                        </Text>
                    </TouchableOpacity>
                </>}
            </View>
            <View style={styles.viewRight}>
                <TouchableOpacity
                    style={styles.iconTopView}
                    onPress={() => handleCart()}
                >
                    <FontAwesomeIcon icon={faShoppingCart} size={25} style={styles.iconTop} />

                    {cart.cartProducts && cart.cartProducts.length > 0 ?
                        <View style={styles.viewCountItemCart}>
                            <Text style={styles.countItemCart}>
                                {cart.cartProducts.reduce((a, b) => a + b.quantity, 0)}
                            </Text>
                        </View>
                    : <></>}
                </TouchableOpacity>
            </View>

            <ModalCartCustom
                visible={openModalCart}
                closeModal={() => setOpenModalCart(false)}
            />
        </View>
    )
}

