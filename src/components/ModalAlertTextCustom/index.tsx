import React from "react";
import { Modal, ModalProps, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

type ModalAlertTextCustomProps = ModalProps & {
    text: string;
    closeModal: () => void;
}

const ModalAlertTextCustom = ({ text, closeModal, ...rest}: ModalAlertTextCustomProps) => {

    return (
        <Modal
            transparent
            animationType='fade'
            statusBarTranslucent
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            {text}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalAlertTextCustom;
