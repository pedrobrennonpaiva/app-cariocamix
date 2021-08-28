import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";

import ButtonDefault from "../../components/ButtonDefault";
import LoadIcon from "../../components/LoadIcon";
import TextInputCustom from "../../components/TextInputCustom";
import { useAuth } from "../../hooks/auth";
import { Coupon } from "../../models/Coupon";
import { UserCoupon } from "../../models/UserCoupon";
import Api, { COUPON_URL, USER_COUPON_URL } from "../../services/api";
import { styles } from "./styles";
import { Utils } from "../../configs/Utils";
import CardSelect from "../../components/CardSelect";
import ModalAlertTextCustom from "../../components/ModalAlertTextCustom";

const Coupons = () => {

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const { user, cart, setCouponCart } = useAuth();
    const api = new Api();

    const [code, setCode] = useState('');
    const [userCoupons, setUserCoupons] = useState<UserCoupon[] | undefined>();

    useEffect(() => {

        const getUserCoupon = async () => {

            await api.get(`${USER_COUPON_URL}/user/${user.id}`)
            .then(res => {

                var userCoupons = res as UserCoupon[];

                if(userCoupons)
                {
                    setUserCoupons(userCoupons);
                }
            })
            .catch(err => {
                console.log(err);
                setError(`Ocorreu um erro ao resgatar os seus cupons!`);
                setUserCoupons([]);
                setOpenModalAlert(true);
            });
        }
        getUserCoupon();
    }, []);

    const handleSetUserCoupon = async (ucoupon: UserCoupon) => {

        setCouponCart(ucoupon.coupon!);
    }

    const handleAddUserCoupon = async () => {

        if(code)
        {
            await api.get(`${COUPON_URL}/code/${code}`)
            .then(async res => {

                var coupon = res as Coupon;

                if(coupon && coupon.isActive)
                {
                    var userCoupon = new UserCoupon();
                    userCoupon.couponId = coupon.id;
                    userCoupon.userId = user.id;

                    await api.insert(USER_COUPON_URL, userCoupon)
                    .then(_ => {
                        var newUc = [...userCoupons ?? []];
                        newUc.push(userCoupon);
                        setUserCoupons(newUc);

                        setError(`Cupom adicionado com sucesso!`);
                        setOpenModalAlert(true);
                    })
                    .catch(err => {
                        console.log(err);
                        throw '';
                    })
                }
                else
                {
                    setError(`Cupom não encontrado!`);
                    setOpenModalAlert(true);
                }
            })
            .catch(err => {
                console.log(err);
                setError(`Ocorreu um erro ao adicionar o cupom!`);
                setOpenModalAlert(true);
            });
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInputCustom
                    placeholder='Digite o código do cupom'
                    onChangeText={setCode}
                    value={code}
                />
                <ButtonDefault
                    txtBtn='Adicionar cupom'
                    onPress={handleAddUserCoupon}
                />
            </View>

            {!userCoupons ? <LoadIcon />
            :
            userCoupons.length > 0 ?
                userCoupons.map((ucoupon, k) => (
                    <CardSelect
                        onPress={() => handleSetUserCoupon(ucoupon)}
                        key={k}
                        conditionSelect={cart && cart.coupon && cart.coupon.id === ucoupon.id}
                        children={
                            <>
                                <Text style={styles.couponTextTitle}>
                                    {ucoupon.coupon?.code}
                                </Text>
                                <Text style={styles.couponTextSubTitle}>
                                    Desconto: {ucoupon.coupon?.percentage ? `${ucoupon.coupon?.percentage}%`
                                    : `R$ ${Utils.currencyValue(ucoupon.coupon?.price!)}`}
                                </Text>
                            </>
                        }
                    />
                ))
            :
            <Text style={styles.txtCoupon}>
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

export default Coupons;
