import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

const CategoryLoad = () => {

    return (
        <SkeletonPlaceholder backgroundColor={theme.colors.loadingItems}>
            <View style={styles.buttons}>
                {[...Array(3)].map((a,b) => (
                    <View style={styles.btnHorizontalNavigator} key={b} />
                ))}
            </View>
        </SkeletonPlaceholder>
    )
}

export default CategoryLoad;
