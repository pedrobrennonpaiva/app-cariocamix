import React from "react";
import { Modal, ModalProps, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";

type ModalAlertCustomProps = ModalProps & {
    children: React.ReactNode;
    closeModal: () => void;
}

const ModalAlertCustom = ({ children, closeModal, ...rest}: ModalAlertCustomProps) => {

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
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default ModalAlertCustom;
