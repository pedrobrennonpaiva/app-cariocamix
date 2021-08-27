import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type TextInputPasswordProps = TextInputProps & {
    password: string;
    setPassword: React.Dispatch<string>;
}

const TextInputPassword = ({password, setPassword, ...rest}: TextInputPasswordProps) => {

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.viewPass}>
            <TextInput
                placeholderTextColor={theme.colors.placeholder}
                style={styles.inputPass}
                onChangeText={setPassword}
                value={password}
                autoCompleteType='password'
                textContentType='password'
                secureTextEntry={hidePass}
                {...rest}
            />
            <Icon
                name={hidePass ? 'eye-slash' : 'eye'}
                size={15}
                color={theme.colors.heading}
                style={styles.iconPass}
                onPress={() => setHidePass(!hidePass)}
            />
        </View>
    )
}

export default TextInputPassword;
