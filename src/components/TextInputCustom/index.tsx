import React from "react";
import { Text, TextInput, TextInputProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type TextInputCustomProps = TextInputProps & {
    value: string;
    onChangeText: React.Dispatch<string>;
    valueError?: string | null;
}

const TextInputCustom = ({value, onChangeText, valueError, ...rest}: TextInputCustomProps) => {

    return (
        <>
            <TextInput
                placeholderTextColor={theme.colors.placeholder}
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                {...rest}
            />
            {valueError ?
                <Text style={styles.txtError}>
                    {valueError}
                </Text>
            : <></>}
        </>
    )
}

export default TextInputCustom;
