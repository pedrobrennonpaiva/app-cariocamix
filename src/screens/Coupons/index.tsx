import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Coupons = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.txtCoupon}>
                Você não possui cupons disponíveis.
            </Text>
        </View>
    )
}

export default Coupons;
