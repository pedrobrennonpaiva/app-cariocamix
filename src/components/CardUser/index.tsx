import React, { useState } from 'react';
import { Alert, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import SmilePng from '../../assets/emoji-sorriso.png';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';
import { ImageData, ImageModel } from '../../models/Image';
import Api from '../../services/api';

export const CardUser = () => {

    const [openModalImage, setOpenModalImage] = useState(false);

    const { user, updateUser, signOut } = useAuth();
    const navigation = useNavigation();
    const api = new Api();

    const handleLogin = () => {
        navigation.navigate('SignIn');
    }

    const chooseImage = (index: number) => {

        const sendImageApi = async (image: ImageData) => {
            api.insertImage(image)
            .then(async res => {

                var image = res.image as ImageModel;
                user.image = image.fileUrl;

                updateUser(user);
                Alert.alert(res.message);
                setOpenModalImage(false);
            })
            .catch(err => {
                console.log('deu erro', err);
            });
        }

        switch(index)
        {
            case 0:
                launchCamera({ mediaType: 'photo' }, (response) => {
                    if (response.didCancel) {
                        console.log('Usuário cancelou');
                    }
                    else if (response.errorCode) {
                        console.log('ImagePicker Error: ', response.errorMessage);
                    }
                    else {
                        const image = response.assets![0] as ImageData;
                        sendImageApi(image);
                    }
                });
                break;
            case 1:
                launchImageLibrary({ mediaType: 'photo' }, (response) => {
                    if (response.didCancel) {
                        console.log('Usuário cancelou');
                    }
                    else if (response.errorCode) {
                        console.log('ImagePicker Error: ', response.errorMessage);
                    }
                    else {
                        const image = response.assets![0] as ImageData;
                        sendImageApi(image);
                    }
                });
                break;
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>

            <Modal
                transparent
                animationType='slide'
                statusBarTranslucent
                visible={openModalImage}
                onRequestClose={() => setOpenModalImage(!openModalImage)}
            >
                <TouchableWithoutFeedback onPress={() => setOpenModalImage(!openModalImage)}>
                    <View style={styles.overlay}>
                        <View style={styles.modalImage}>
                            <View style={styles.bar} />

                            <View style={styles.menu}>
                                <TouchableOpacity onPress={() => chooseImage(0)}
                                    style={styles.buttonImage}
                                >
                                    <Text style={styles.textButtonImage}>
                                        Abrir camera
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => chooseImage(1)}
                                    style={styles.buttonImage}
                                >
                                    <Text style={styles.textButtonImage}>
                                        Abrir galeria
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {user.image ?
                <TouchableOpacity onPress={() => setOpenModalImage(true)}>
                    <Image
                        source={{ uri: user.image }}
                        style={styles.imgUser}
                    />
                </TouchableOpacity>
            :
            user.id ?
                <TouchableOpacity onPress={() => setOpenModalImage(true)}>
                    <Image
                        source={SmilePng}
                        style={styles.imgUser}
                    />
                </TouchableOpacity>
            :
                <Image
                    source={SmilePng}
                    style={styles.imgUser}
                />
            }

            <View style={styles.containerText}>
                {user.id ?
                <>
                    <Text style={styles.title}>
                        {user.name}
                    </Text>
                    <TouchableOpacity onPress={signOut}>
                        <Text style={styles.subtitle}>
                            Fazer logout
                        </Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <Text style={styles.title}>
                        Olá, Visitante!
                    </Text>
                    <TouchableOpacity
                        onPress={() => handleLogin()}
                    >
                        <Text style={styles.subtitle}>
                            Faça login ou cadastre-se
                        </Text>
                    </TouchableOpacity>
                </>
                }
            </View>
        </View>
    )
}
