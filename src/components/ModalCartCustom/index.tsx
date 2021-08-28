import React, { useEffect, useState } from "react";
import { Modal, ModalProps, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Utils } from "../../configs/Utils";
import { useAuth } from "../../hooks/auth";
import { CartProductModel } from "../../models/CartModel";
import CartSelect from "../CartSelect";
import styles from "./styles";
import Api, { STORE_DAYHOUR_URL } from "../../services/api";
import { StoreDayHour } from "../../models/StoreDayHour";
import ModalAlertTextCustom from "../ModalAlertTextCustom";

type ModalCartCustom = ModalProps & {
    closeModal: () => void;
}

const ModalCartCustom = ({ closeModal, ...rest}: ModalCartCustom) => {

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const api = new Api();
    const navigation = useNavigation();
    const { cart, removeCartProduct } = useAuth();

    const [dateNow] = useState(new Date());
    const [storeDayHours, setStoreDayHours] = useState<StoreDayHour[] | undefined>();

    useEffect(() => {

        const getStoreDayHours = async () => {

            await api.get(STORE_DAYHOUR_URL)
            .then(res => {
                setStoreDayHours(res);
            })
            .catch(err => {

            });
        }
        getStoreDayHours();
    }, []);

    const handleRemoveCartProduct = (cp: CartProductModel) => {
        removeCartProduct(cp);
    }

    const handleAddOrder = () => {

        if((!cart.address || cart.address == undefined) ||
            (!cart.paymentType || cart.paymentType == undefined))
        {
            setError(`${!cart.address || cart.address == undefined ? 'Endereço não selecionado!\n' : ''}${!cart.paymentType || cart.paymentType == undefined ? 'Meio de pagamento não selecionado!\n' : ''}`);
            setOpenModalAlert(true);
        }
    }

    const handleChangeSelects = (view: string) => {
        navigation.navigate(view);
    }

    return (
        <Modal
            transparent
            animationType='slide'
            statusBarTranslucent
            {...rest}
        >
            <TouchableOpacity style={styles.overlay} onPress={closeModal}>
            </TouchableOpacity>

            <View style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.bar} />

                    <View style={styles.menu}>

                        <ScrollView style={styles.listView}>
                            <Text style={styles.titleCart}>
                                Carrinho
                            </Text>
                            {cart.cartProducts && cart.cartProducts.length > 0 ?
                                <>
                                    {cart.cartProducts.map((cproduct, k) => (
                                        <View style={styles.cartLine} key={k}>
                                            <View style={styles.cartSectionLine}>
                                                <Text style={styles.titleCartLine}>
                                                    {cproduct.product.title}
                                                </Text>
                                                <Text style={styles.txtCartLine}>
                                                    {`Quantidade: ${cproduct.quantity}`}
                                                </Text>
                                                {cproduct.obs ?
                                                    <Text style={styles.txtCartLine}>
                                                        {`Observações: ${cproduct.obs}`}
                                                    </Text>
                                                : <></>}
                                                <Text style={styles.txtTotalCartLine}>
                                                    {`Total: R$ ${Utils.currencyValue(cproduct.total)}`}
                                                </Text>
                                            </View>
                                            <View style={styles.cartButtonLine}>
                                                <TouchableOpacity
                                                    onPress={() => handleRemoveCartProduct(cproduct)}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faTrashAlt}
                                                        size={20}
                                                        style={styles.icon}
                                                        />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}

                                    <View style={styles.viewCartSelects}>
                                        <View style={styles.viewStoreOpen}>
                                            {storeDayHours &&
                                            storeDayHours.some(sth => sth.dayOfWeek == dateNow?.getDay())
                                            ?
                                                storeDayHours.filter(x => x.dayOfWeek == dateNow?.getDay()).some(sth =>
                                                    `${dateNow.getHours()}:${dateNow.getMinutes()}` > sth.hourOpen &&
                                                    `${dateNow.getHours()}:${dateNow.getMinutes()}` < sth.hourClose
                                                ) ?
                                                <>
                                                    <Text style={styles.txtStoreOpen}>
                                                        Lojas abertas.
                                                    </Text>
                                                </>
                                                :
                                                <>
                                                    <Text style={styles.txtStoreOpen}>
                                                        {`As lojas hoje abrem ${storeDayHours.filter(x => x.dayOfWeek == dateNow?.getDay()).reduce((prev, curr) => prev.hourOpen < curr.hourOpen ? prev : curr).hourOpen} e fecham ${storeDayHours.filter(x => x.dayOfWeek == dateNow?.getDay()).reduce((prev, curr) => prev.hourClose > curr.hourClose ? prev : curr).hourClose}`}
                                                    </Text>
                                                </>
                                            : <>
                                                <Text style={styles.txtStoreOpen}>
                                                    As lojas não funcionam hoje.
                                                </Text>
                                            </>
                                            }
                                        </View>

                                        <CartSelect
                                            onPress={() => handleChangeSelects('Addresses')}
                                            children={
                                                <>
                                                    {cart.address ?
                                                    <Text style={styles.textCartSelect} numberOfLines={2}>
                                                        {`${cart.address?.addressText}, ${cart.address?.complement} - ${cart.address?.neighborhood}, ${cart.address?.city}`}
                                                    </Text>
                                                    :
                                                    <Text style={styles.textCartSelect} numberOfLines={2}>
                                                        Selecione o endereço de entrega
                                                    </Text>
                                                    }
                                                </>
                                            }
                                        />

                                        <CartSelect
                                            onPress={() => handleChangeSelects('PaymentTypes')}
                                            children={
                                                <>
                                                    {cart.paymentType ?
                                                    <Text style={styles.textCartSelect}>
                                                        {cart.paymentType.name}
                                                    </Text>
                                                    :
                                                    <Text style={styles.textCartSelect}>
                                                        Selecione o tipo de pagamento
                                                    </Text>
                                                    }
                                                </>
                                            }
                                        />

                                        <CartSelect
                                            onPress={() => handleChangeSelects('Coupons')}
                                            children={
                                                <>
                                                    {cart.coupon ?
                                                    <>
                                                        <Text style={styles.couponTextTitle}>
                                                            {cart.coupon.code}
                                                        </Text>
                                                        <Text style={styles.couponTextSubTitle}>
                                                            Desconto: {cart.coupon.percentage ? `${cart.coupon.percentage}%`
                                                            : `R$ ${Utils.currencyValue(cart.coupon.price!)}`}
                                                        </Text>
                                                    </>
                                                    :
                                                    <Text style={styles.textCartSelect}>
                                                        Nenhum cupom selecionado
                                                    </Text>
                                                    }
                                                </>
                                            }
                                        />
                                    </View>
                                </>
                            :
                                <Text style={styles.textEmptyCart}>
                                    Seu carrinho está vazio.
                                </Text>
                            }
                        </ScrollView>

                        {cart.cartProducts && cart.cartProducts.length > 0 ?
                        <View style={styles.buttonView}>
                            <TouchableOpacity
                                style={styles.btnCart}
                                onPress={handleAddOrder}
                            >
                                <Text style={styles.txtBtn}>Realizar pedido {`R$ ${Utils.currencyValue(cart.total)}`}</Text>
                            </TouchableOpacity>
                        </View>
                        : <></>}
                    </View>
                </View>
            </View>

            <ModalAlertTextCustom
                visible={openModalAlert}
                closeModal={() => setOpenModalAlert(false)}
                text={error}
            />
        </Modal>
    )
}

export default ModalCartCustom;
