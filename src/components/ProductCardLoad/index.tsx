import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { theme } from "../../global/styles/theme";
import { styles } from './styles';

const ProductCardLoad = () => {

    return (
        <SkeletonPlaceholder backgroundColor={theme.colors.loadingItems}>
            {[...Array(2)].map((a,b) => (
                <View key={b}>
                    <View style={styles.textTitle} />

                    <View style={styles.viewListTop}>
                        <View style={styles.viewListLeft}>
                            <View style={styles.titleList} />
                            <View style={styles.descriptionList} />
                        </View>
                        <View style={styles.viewListRight}>
                            <View style={styles.imageList} />
                        </View>
                    </View>

                    <View style={styles.priceList} />
                </View>
            ))}
        </SkeletonPlaceholder>
    )
}

export default ProductCardLoad;
