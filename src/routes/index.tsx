import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../hooks/auth";
import InitStack from "../stacks/InitStack";
import MainStack from "../stacks/MainStack";

export const Routes = () => {

    const { user } = useAuth();

    return (
        <NavigationContainer independent>
            {user.id
            ? <MainStack />
            : <InitStack />
            }
        </NavigationContainer>
    )
}
