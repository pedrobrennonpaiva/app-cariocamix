import React, { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    txtBtn: ReactNode;
}

const ButtonDefault = ({txtBtn, ...rest}: Props) => {

    return (
        <TouchableOpacity
            style={styles.btn}
            {...rest}
        >
            <Text style={styles.txtBtn}>
                {txtBtn}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonDefault;
