import React from "react"
import { ActivityIndicator } from "react-native"
import { theme } from "../../global/styles/theme"

const LoadIcon = () => {

    return (
        <ActivityIndicator color={theme.colors.primary} />
    )
}

export default LoadIcon;
