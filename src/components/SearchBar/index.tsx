import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = TextInputProps & {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({search, setSearch, ...rest}: Props) => {

    const handleClean = () => {
        setSearch('');
    }

    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                icon={faSearch}
                style={styles.iconSearch}
                size={18}
            />
            <TextInput
                style={styles.inputSearch}
                placeholderTextColor={theme.colors.highlight}
                value={search}
                {...rest}
            />
            {search !== '' &&
            <TouchableOpacity onPress={handleClean}>
                <FontAwesomeIcon
                    icon={faTimes}
                    style={styles.iconClean}
                    size={18}
                />
            </TouchableOpacity>
            }
        </View>
    );
}
