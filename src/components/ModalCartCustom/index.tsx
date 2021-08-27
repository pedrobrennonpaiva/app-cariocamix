import { faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Modal, ModalProps, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Utils } from "../../configs/Utils";
import { useAuth } from "../../hooks/auth";
import { CartProductModel } from "../../models/CartModel";
import styles from "./styles";

type ModalCartCustom = ModalProps & {
    closeModal: () => void;
}

const ModalCartCustom = ({ closeModal, ...rest}: ModalCartCustom) => {

    const { cart, removeCartProduct } = useAuth();

    const handleRemoveCartProduct = (cp: CartProductModel) => {
        removeCartProduct(cp);
    }

    const handleAddOrder = () => {

    }

    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableOpacity style={styles.overlay} onPress={closeModal}>
            </TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.bar} />

                    <View style={styles.menu}>

                        <ScrollView style={styles.listView}>
                            <Text style={styles.titleCart}>
                                Carrinho
                            </Text>
                            {cart.cartProducts && cart.cartProducts.length > 0 ?
                                <>
                                    {cart.cartProducts.map((cproduct, k) => (
                                        <View style={styles.cartLine} key={k}>
                                            <View style={styles.cartSectionLine}>
                                                <Text style={styles.titleCartLine}>
                                                    {cproduct.product.title}
                                                </Text>
                                                <Text style={styles.txtCartLine}>
                                                    {`Quantidade: ${cproduct.quantity}`}
                                                </Text>
                                                {cproduct.obs ?
                                                    <Text style={styles.txtCartLine}>
                                                        {`Observações: ${cproduct.obs}`}
                                                    </Text>
                                                : <></>}
                                            </View>
                                            <View style={styles.cartButtonLine}>
                                                <TouchableOpacity
                                                    onPress={() => handleRemoveCartProduct(cproduct)}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrashAlt}
                                                        size={20}
                                                        style={styles.icon}
                                                        />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}
                                </>
                            :
                                <Text style={styles.textEmptyCart}>
                                    Seu carrinho está vazio.
                                </Text>
                            }
                        </ScrollView>

                        {cart.cartProducts && cart.cartProducts.length > 0 ?
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.btnCart}
                                onPress={handleAddOrder}
                            >
                                <Text style={styles.txtBtn}>Realizar pedido {`R$ ${Utils.currencyValue(cart.total)}`}</Text>
                            </TouchableOpacity>
                        </View>
                        : <></>}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalCartCustom;
