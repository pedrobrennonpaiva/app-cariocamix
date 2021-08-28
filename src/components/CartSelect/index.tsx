import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./styles";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = TouchableOpacityProps & {
    children: ReactNode;
}

const CartSelect = ({children, ...rest}: Props) => {

    return (
        <TouchableOpacity
            style={styles.view}
            {...rest}
        >
            <View style={styles.childrenView}>
                {children}
            </View>
            <View style={styles.iconView}>
                <FontAwesomeIcon
                    icon={faChevronRight}
                    size={25}
                    style={styles.icon}
                />
            </View>
        </TouchableOpacity>
    )
}

export default CartSelect;
