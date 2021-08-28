import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, Modal, TouchableOpacity } from "react-native";
import TextInputMask from 'react-native-text-input-mask';
import ButtonDefault from "../../components/ButtonDefault";
import CardSelect from "../../components/CardSelect";
import LoadIcon from "../../components/LoadIcon";
import ModalAlertTextCustom from "../../components/ModalAlertTextCustom";
import TextInputCustom from "../../components/TextInputCustom";
import { Utils } from "../../configs/Utils";
import { Validations } from "../../configs/Validations";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { Address } from "../../models/Address";
import { ViaCepModel } from "../../models/ViaCepModel";
import Api, { ADDRESS_URL } from "../../services/api";
import { styles } from "./styles";

const Addresses = () => {

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const { user, cart, setAddressCart } = useAuth();
    const api = new Api();
    const navigation = useNavigation();

    const [addresses, setAddresses] = useState<Address[] | undefined>();

    //#region address

    const [cep, setCep] = useState("");
    const [addressText, setAddressText] = useState("");
    const [complement, setComplement] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const [cepError, setCepError] = useState("");
    const [addressTextError, setAddressTextError] = useState("");
    const [neighborhoodError, setNeighborhoodError] = useState("");
    const [cityError, setCityError] = useState("");
    const [stateError, setStateError] = useState("");

    const [inputDisable, setInputDisable] = useState(true);
    const [btnDisableAdd, setBtnDisableAdd] = useState(false);
    const [btnTxtAdd, setBtnTxtAdd] = useState<string | object>("Adicionar endereço");

    //#endregion

    useEffect(() => {

        const getAddresses = async () => {

            await api.get(`${ADDRESS_URL}/user/${user.id}`)
            .then(res => {

                var addressesUser = res as Address[];

                if(addressesUser)
                {
                    setAddresses(addressesUser);
                }
            })
            .catch(err => {
                console.log(err);
                setError(`Ocorreu um erro ao resgatar os endereços!`);
                setAddresses([]);
                setOpenModalAlert(true);
            });
        }
        getAddresses();
    }, []);

    const handleSetAddress = (address: Address) => {
        setAddressCart(address);
    }

    const handleAddAddress = () => {
        setOpenModal(true);
    }

    const handleAdd = async () => {

        setBtnDisableAdd(true);
        setBtnTxtAdd(<LoadIcon />);

        var cError = Validations.validateRequiredField(cep, "cep");
        var aError = Validations.validateRequiredField(addressText, "rua");
        var nError = Validations.validateRequiredField(neighborhood, "bairro");
        var ciError = Validations.validateRequiredField(city, "cidade");
        var staError = Validations.validateRequiredField(state, "estado");

        if(cError || aError || nError || ciError || staError)
        {
            setCepError(cError);
            setAddressTextError(aError);
            setNeighborhoodError(nError);
            setCityError(cityError);
            setStateError(staError);
            setBtnDisableAdd(false);
            setBtnTxtAdd('Adicionar endereço');
        }
        else
        {
            var model = new Address();
            model.userId = user.id;
            model.cep = cep;
            model.addressText = addressText;
            model.complement = complement;
            model.neighborhood = neighborhood;
            model.city = city;
            model.state = state;
            model.country = 'BR';

            await api.insert(ADDRESS_URL, model)
            .then(res => {
                const cpn = res.data.data as Address;
                setAddresses([...addresses ?? [], cpn]);
                setBtnDisableAdd(false);
                setBtnTxtAdd('Adicionar endereço');
                setOpenModal(false);

                setError(`Endereço adicionado com sucesso!`);
                setOpenModalAlert(true);
            })
            .catch(_ => {
                setBtnDisableAdd(false);
                setBtnTxtAdd('Adicionar endereço');
                setOpenModal(false);

                setError(`Ocorreu um erro ao adicionar o endereço!`);
                setOpenModalAlert(true);
            });
        }
    }

    const handleCepSearch = async () => {

        await api.cepSearch(Utils.removeDiacritics(cep))
        .then(res => {
            const viaCep = res as ViaCepModel;
            setAddressText(viaCep.logradouro);
            setComplement(viaCep.complemento);
            setNeighborhood(viaCep.bairro);
            setCity(viaCep.localidade);
            setState(viaCep.uf);
            setInputDisable(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <ScrollView style={styles.container}>
            <ButtonDefault
                txtBtn='Adicionar endereço'
                onPress={handleAddAddress}
            />
            {!addresses ? <LoadIcon />
            :
            addresses.length > 0 ?
                addresses.map((address, k) => (
                    <CardSelect
                        onPress={() => handleSetAddress(address)}
                        key={k}
                        conditionSelect={cart && cart.address && cart.address.id === address.id}
                        children={
                            <>
                                <Text style={styles.textTitle} numberOfLines={2}>
                                    {`${address.addressText}, ${address.complement} - ${address.neighborhood}, ${address.city}`}
                                </Text>
                            </>
                        }
                    />
                ))
            :
            <Text style={styles.txt}>
                Nenhum endereço cadastrado.
            </Text>
            }

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

                                <TextInputMask
                                    value={cep}
                                    onChangeText={setCep}
                                    mask={"[00].[000]-[000]"}
                                    style={styles.input}
                                    placeholder='Digite o CEP (00.000-000)'
                                    placeholderTextColor={theme.colors.placeholder}
                                    onBlur={handleCepSearch}
                                />
                                {cepError ?
                                    <Text style={styles.txtError}>
                                        {cepError}
                                    </Text>
                                : <></>}

                                <TextInputCustom
                                    placeholder='Digite a rua'
                                    onChangeText={setAddressText}
                                    value={addressText}
                                    valueError={addressTextError}
                                />

                                <TextInputCustom
                                    placeholder='Digite o complemento'
                                    onChangeText={setComplement}
                                    value={complement}
                                />

                                <TextInputCustom
                                    placeholder='Digite o bairro'
                                    onChangeText={setNeighborhood}
                                    value={neighborhood}
                                    valueError={neighborhoodError}
                                    editable={inputDisable}
                                />

                                <TextInputCustom
                                    placeholder='Digite a cidade'
                                    onChangeText={setCity}
                                    value={city}
                                    valueError={cityError}
                                    editable={inputDisable}
                                />

                                <TextInputCustom
                                    placeholder='Digite o estado'
                                    onChangeText={setState}
                                    value={state}
                                    valueError={stateError}
                                    editable={inputDisable}
                                />

                            </ScrollView>

                            <View style={styles.buttonViewModal}>
                                <ButtonDefault
                                    txtBtn={btnTxtAdd}
                                    disabled={btnDisableAdd}
                                    onPress={handleAdd}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <ModalAlertTextCustom
                visible={openModalAlert}
                closeModal={() => setOpenModalAlert(false)}
                text={error}
            />
        </ScrollView>
    )
}

export default Addresses;
