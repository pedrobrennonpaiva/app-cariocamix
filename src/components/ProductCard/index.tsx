import React, { useEffect, useState } from "react";
import { Image, Modal, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Checkbox from '@react-native-community/checkbox';
import { Utils } from "../../configs/Utils";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { Product } from "../../models/Product";
import { styles } from "./styles";
import { CartModel, CartProductModel } from "../../models/CartModel";
import { ProductItem } from "../../models/ProductItem";
import ModalAlertCustom from "../ModalAlertCustom";

type Props = {
    data: Product;
}

export const ProductCard = ({ data }: Props) => {

    const { user, insertCartProduct } = useAuth();
    const [openModal, setOpenModal] = useState(false);

    const [totalPrice, setTotalPrice] = useState(data.price);
    const [pItems, setPitems] = useState(data.productItems ?? new Array<ProductItem>());
    const [quantity, setQuantity] = useState(1);
    const [obs, setObs] = useState('');
    const [pItemRequiredError, setPItemRequiredError] = useState('');

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    useEffect(() => {
        if(data.productItems && data.productItems.length > 0)
        {
            if(!data.isOneItem)
            {
                pItems?.forEach(x => {
                    x.isSelected = x.isDefault;
                });
                setPitems(pItems);
            }
        }
    }, []);

    const handleSetQuantity = (increment: boolean) => {

        if(increment)
        {
            var newQuantity = quantity + 1;
            setTotalPrice(totalPrice - (quantity * data.price) + (newQuantity * data.price));
            setQuantity(newQuantity);
        }
        else
        {
            var newQuantity = quantity === 1 ? quantity : quantity - 1;
            setTotalPrice(totalPrice - (quantity * data.price) + (newQuantity * data.price));
            setQuantity(newQuantity);
        }
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleAddCart = async () => {

        if(!user.id)
        {
            setError('Usuário não logado');
            setOpenModalAlert(true);
            return;
        }
        else if(data.isOneItem && pItems?.filter(x => x.isSelected).length <= 0)
        {
            setPItemRequiredError('Um item deve ser selecionado!');
        }
        else
        {
            var cartProduct = new CartProductModel();
            cartProduct.product = data;
            cartProduct.productItems = pItems;
            cartProduct.obs = obs;
            cartProduct.quantity = quantity;
            cartProduct.total = totalPrice;
            await insertCartProduct(cartProduct);

            setError('Produto adicionado ao carrinho!');
            setOpenModalAlert(true);
        }
    }

    const handleChangeItemCheck = (index: number) => {

        if(!pItems![index].isDefault && !pItems![index].isSelected)
        {
            setTotalPrice(totalPrice + pItems![index].price);
        }
        else if(!pItems![index].isDefault && pItems![index].isSelected)
        {
            setTotalPrice(totalPrice - pItems![index].price);
        }
        var newP = [...pItems!];
        newP![index].isSelected = !newP![index].isSelected;
        setPitems(newP);
    }

    const handleChangeItemRadio = (index: number) => {

        var newP = [...pItems!];
        newP.map((x) => {
            x.isSelected = x.isDefault ? false : x.isSelected;
            return x;
        });

        newP![index].isSelected = true;
        setPitems(newP);
    }

    return (
        <>
            <RectButton
                style={styles.viewList}
                onPress={handleOpenModal}
            >
                <View style={styles.viewListTop}>
                    <View style={styles.viewListLeft}>
                        <Text style={styles.titleList}>
                            {data.title}
                        </Text>
                        <Text
                            style={styles.descriptionList}
                            numberOfLines={4}
                        >
                            {data.description}
                        </Text>
                    </View>
                    <View style={styles.viewListRight}>
                        <Image
                            style={styles.imageList}
                            source={{
                                uri: data.image,
                            }}
                        />
                    </View>
                </View>

                <View style={styles.viewListBottom}>
                    <Text style={styles.priceList}>
                        {`R$ ${Utils.currencyValue(data.price)}`}
                    </Text>
                    {/* <Text style={styles.pricePreviousList}>
                        {data.pricePrevious}
                    </Text> */}
                </View>
            </RectButton>

            <Modal
                transparent
                animationType='slide'
                statusBarTranslucent
                visible={openModal}
            >
                <TouchableOpacity style={styles.overlayModal} onPress={() => setOpenModal(false)}>
                </TouchableOpacity>

                <View style={styles.contentModal}>
                    <View style={styles.containerModal}>
                        <View style={styles.barModal} />

                        <View style={styles.menuModal}>

                            <ScrollView style={styles.listViewModal}>
                                <View style={styles.viewProductListModal}>
                                    <View style={styles.viewListLeftModal}>
                                        <Image
                                            style={styles.imageListModal}
                                            source={{
                                                uri: data.image,
                                            }}
                                        />
                                    </View>
                                    <View style={styles.viewListRightModal}>
                                        <Text style={styles.titleListModal}>
                                            {data.title}
                                        </Text>
                                        <Text
                                            style={styles.descriptionListModal}
                                        >
                                            {data.description}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.viewRowModal}>
                                    <Text style={styles.textRowModal}>
                                        Quantidade
                                    </Text>
                                    <View style={styles.viewIncrementBtnModal}>
                                        <TouchableOpacity
                                            style={styles.btnIncrementModal}
                                            onPress={() => handleSetQuantity(false)}
                                        >
                                            <FontAwesomeIcon
                                                icon={faMinus}
                                                size={20}
                                                style={styles.iconIncrementModal}
                                            />
                                        </TouchableOpacity>
                                        <Text style={styles.textIncrementBtnModal}>
                                            {quantity}
                                        </Text>
                                        <TouchableOpacity
                                            style={styles.btnIncrementModal}
                                            onPress={() => handleSetQuantity(true)}
                                        >
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                                size={20}
                                                style={styles.iconIncrementModal}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {pItems && pItems.length > 0 ?
                                    data.isOneItem ?
                                    <>
                                        <View style={styles.viewModal}>
                                            <Text style={styles.textRowModal}>
                                                Itens obrigatórios
                                            </Text>

                                            {pItems.filter(x => x.isDefault).map((pItem, k) => (
                                                <TouchableOpacity
                                                    style={styles.viewItemModal}
                                                    onPress={() => handleChangeItemRadio(pItems.indexOf(pItem))}
                                                    key={k}
                                                >
                                                    <View style={styles.viewTextItemModal}>
                                                        <Text style={styles.textItemModal}>
                                                            {pItem.item?.title}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.viewIncrementBtnModal}>
                                                        <View style={styles.viewRadioModal}>
                                                            {pItem.isSelected ?
                                                                <View style={styles.viewRadioSelectedModal}/>
                                                            : null}
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            ))}

                                            {pItemRequiredError ?
                                                <Text style={styles.txtError}>
                                                    {pItemRequiredError}
                                                </Text>
                                            : <></>}
                                        </View>
                                        {pItems.filter(x => !x.isDefault).length > 0 ?
                                            <View style={styles.viewModal}>
                                                <Text style={styles.textRowModal}>
                                                    Itens adicionais
                                                </Text>

                                                {pItems.filter(x => !x.isDefault).map((pItem, k) => (
                                                    <TouchableOpacity
                                                        style={styles.viewItemModal}
                                                        onPress={() => handleChangeItemCheck(pItems.indexOf(pItem))}
                                                        key={k}
                                                    >
                                                        <View style={styles.viewTextItemModal}>
                                                            <Text style={styles.textItemModal}>
                                                                {pItem.item?.title}
                                                            </Text>
                                                            {pItem.isDefault ?
                                                                <Text style={styles.textSecondaryItemModal}>
                                                                    {` (opcional)`}
                                                                </Text>
                                                            :
                                                                <Text style={styles.textPriceItemModal}>
                                                                    {` R$ ${Utils.currencyValue(pItem.price)}`}
                                                                </Text>
                                                            }
                                                        </View>
                                                        <View style={styles.viewIncrementBtnModal}>
                                                            <Checkbox
                                                                value={pItem.isSelected}
                                                                tintColors={{
                                                                    true: theme.colors.primary,
                                                                    false: theme.colors.highlight
                                                                }}
                                                                tintColor={theme.colors.highlight}
                                                                onCheckColor={theme.colors.primary}
                                                                onValueChange={() => handleChangeItemCheck(pItems.indexOf(pItem))}
                                                            />
                                                        </View>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        :<></>}
                                    </>
                                    :
                                    <View style={styles.viewModal}>
                                        <Text style={styles.textRowModal}>
                                            Itens inclusos/adicionais
                                        </Text>

                                        {pItems.map((pItem, k) => (
                                            <TouchableOpacity
                                                style={styles.viewItemModal}
                                                onPress={() => handleChangeItemCheck(k)}
                                                key={k}
                                            >
                                                <View style={styles.viewTextItemModal}>
                                                    <Text style={styles.textItemModal}>
                                                        {pItem.item?.title}
                                                    </Text>
                                                    {pItem.isDefault ?
                                                        <Text style={styles.textSecondaryItemModal}>
                                                            {` (opcional)`}
                                                        </Text>
                                                    :
                                                        <Text style={styles.textPriceItemModal}>
                                                            {` R$ ${Utils.currencyValue(pItem.price)}`}
                                                        </Text>
                                                    }
                                                </View>
                                                <View style={styles.viewIncrementBtnModal}>
                                                    <Checkbox
                                                        value={pItem.isSelected}
                                                        tintColors={{
                                                            true: theme.colors.primary,
                                                            false: theme.colors.highlight
                                                        }}
                                                        tintColor={theme.colors.highlight}
                                                        onCheckColor={theme.colors.primary}
                                                        onValueChange={() => handleChangeItemCheck(k)}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                : <></>}
                                <View style={styles.viewModal}>
                                    <Text style={styles.textRowModal}>
                                        Observações:
                                    </Text>
                                    <TextInput
                                        value={obs}
                                        onChangeText={(e) => setObs(e)}
                                        numberOfLines={4}
                                        style={styles.textInputModal}
                                        placeholder='Digite aqui as observações...'
                                        placeholderTextColor={theme.colors.placeholder}
                                        multiline = {true}
                                    />
                                </View>
                            </ScrollView>

                            <View style={styles.buttonViewModal}>
                                <TouchableOpacity
                                    style={styles.btnModal}
                                    onPress={handleAddCart}
                                >
                                    <Text style={styles.txtModal}>Adicionar {`R$ ${Utils.currencyValue(totalPrice)}`}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <ModalAlertCustom visible={openModalAlert} closeModal={() => setOpenModalAlert(false)}>
                <Text>
                    {error}
                </Text>
            </ModalAlertCustom>
        </>
    )
}
