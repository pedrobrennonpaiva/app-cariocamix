import { faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { ReactNode } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    conditionSelect: boolean | null;
    children: ReactNode;
}

const CardSelect = ({conditionSelect, children, ...rest}: Props) => {

    return (
        <TouchableOpacity
            style={styles.view}
            {...rest}
        >
            <View style={styles.iconView}>
                {conditionSelect ?
                    <FontAwesomeIcon
                        icon={faDotCircle}
                        size={25}
                        style={styles.iconSelect}
                    />
                :
                    <FontAwesomeIcon
                        icon={faCircle}
                        size={25}
                        style={styles.icon}
                    />
                }
            </View>
            <View style={styles.childrenView}>
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default CardSelect;
