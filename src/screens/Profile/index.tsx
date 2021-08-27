import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { faCreditCard, faMapMarkerAlt, faTicketAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { CardUser } from "../../components/CardUser";
import { ItemMenuProfile } from "../../components/ItemMenuProfile";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";

const Profile = () => {

    const { user, signOut } = useAuth();

    return (
        <View style={styles.container}>
            <CardUser />

            {user.id ? <>
            <ItemMenuProfile
                title='Perfil'
                subtitle='Meu perfil'
                screenName='ProfileDetails'
                icon={faUser}
            />
            <ItemMenuProfile
                title='Endereços'
                subtitle='Meus endereços de entrega'
                screenName=''
                icon={faMapMarkerAlt}
            />
            <ItemMenuProfile
                title='Formas de pagamento'
                subtitle='Minhas formas de pagamento'
                screenName=''
                icon={faCreditCard}
            />
            <ItemMenuProfile
                title='Cupons'
                subtitle='Meus cupons de desconto'
                screenName=''
                icon={faTicketAlt}
            />

            <View style={styles.menu}>
                <TouchableOpacity
                    onPress={() => signOut()}
                    style={styles.buttonMenu}
                >
                    <Text style={styles.textMenu}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
            </> : <></>}
        </View>
    )
}

export default Profile;
