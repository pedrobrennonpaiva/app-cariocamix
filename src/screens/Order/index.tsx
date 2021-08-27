import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";

const Order = () => {

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Meus pedidos
            </Text>
        </ScrollView>
    )
}

export default Order;
