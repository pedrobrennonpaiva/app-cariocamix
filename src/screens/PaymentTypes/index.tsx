import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CardSelect from "../../components/CardSelect";
import LoadIcon from "../../components/LoadIcon";
import ModalAlertTextCustom from "../../components/ModalAlertTextCustom";
import { useAuth } from "../../hooks/auth";
import { PaymentType } from "../../models/PaymentType";
import Api, { PAYMENT_TYPE_URL } from "../../services/api";
import { styles } from "./styles";

const PaymentTypes = () => {

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const api = new Api();
    const { cart, setPaymentTypeCart } = useAuth();

    const [paymentTypes, setPaymentTypes] = useState<PaymentType[] | undefined>();

    useEffect(() => {

        const getPaymentTypes = async () => {

            await api.get(PAYMENT_TYPE_URL)
            .then(res => {
                setPaymentTypes(res);
            })
            .catch(err => {
                console.log(err);
                setError('Ocorreu um erro ao buscar as formas de pagamento');
                setOpenModalAlert(true);
            });
        }
        getPaymentTypes();
    }, []);

    const handleSetPaymentType = (paymentType: PaymentType) => {

        setPaymentTypeCart(paymentType);
    }

    return (
        <ScrollView style={styles.container}>
            {!paymentTypes ? <LoadIcon />
            :
            paymentTypes.length > 0 ?
                paymentTypes.map((ptype, k) => (
                    <CardSelect
                        onPress={() => handleSetPaymentType(ptype)}
                        key={k}
                        conditionSelect={cart && cart.paymentType && cart.paymentType.id === ptype.id}
                        children={
                            <Text style={styles.txt}>
                                {ptype.name}
                            </Text>
                        }
                    />
                ))
            :
            <Text style={styles.txtNone}>
                Você não possui cupons disponíveis.
            </Text>
            }

            <ModalAlertTextCustom
                visible={openModalAlert}
                closeModal={() => setOpenModalAlert(false)}
                text={error}
            />
        </ScrollView>
    )
}

export default PaymentTypes;
