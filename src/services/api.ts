import axios from "axios";
import { Platform } from "react-native";
import { AuthenticateModel } from "../models/Authenticate";
import { Base } from "../models/base/Base";
import { ImageData } from "../models/Image";
import { User } from "../models/User";
import { Session } from "./session";

const ADDRESS_URL = 'address';
const ADDRESS_STORE_URL = 'addressStore';
const CATEGORY_URL = 'category';
const CATEGORY_PRODUCT_URL = 'categoryProduct';
const COUPON_URL = 'coupon';
const DELIVERY_STATUS_URL = 'deliveryStatus';
const DELIVERY_TAX_URL = 'deliveryTax';
const ITEM_URL = 'item';
const IMAGE_URL = 'image';
const ORDER_URL = 'order';
const ORDER_PRODUCT_URL = 'orderProduct';
const ORDER_PRODUCT_ITEM_URL = 'orderProductItem';
const PAYMENT_STATUS_URL = 'paymentStatus';
const PAYMENT_TYPE_URL = 'paymentType';
const PRODUCT_URL = 'product';
const PRODUCT_ITEM_URL = 'productItem';
const STORE_URL = 'store';
const STORE_DAYHOUR_URL = 'storeDayHour';
const USER_COUPON_URL = 'userCoupon';

class Api {

    BASE_URL = "https://api-cariocamix.herokuapp.com";

    accessToken = Session.getToken();

    getToken = () => {

        axios.interceptors.request.use(async config => {
            const token = await this.accessToken;

            if(token)
            {
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        });
    }

    //#region User

    getUser = async () => {

        return await axios.get(`${this.BASE_URL}/user`, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    getUserById = async (id: string) => {

        return await axios.get(`${this.BASE_URL}/user/${id}`, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    insertUser = async (model: User) => {

        return await axios.post(`${this.BASE_URL}/user`, model)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    authenticateUser = async (model: AuthenticateModel) => {

        return await axios.post(`${this.BASE_URL}/user/authenticate`, model)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    updateUser = async (model: User) => {

        this.getToken();

        return await axios.put(`${this.BASE_URL}/user/${model.id}`, model)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    resetPasswordUser = async (id: string, newPassword: string) => {

        return await axios.post(`${this.BASE_URL}/user/resetPassword/${id}/${newPassword}`, {}, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    forgotPasswordUser = async (email: string) => {

        return await axios.post(`${this.BASE_URL}/user/forgotPassword/${email}`, {}, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    //#endregion

    //#region Generic

    get = async (url: string) => {

        this.getToken();

        return await axios.get(`${this.BASE_URL}/${url}`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                console.log(error);
                return Promise.reject(error.response);
            });
    }

    getById = async (url: string, id: string) => {

        this.getToken();

        return await axios.get(`${this.BASE_URL}/${url}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return Promise.reject(error.response);
            });
    }

    insert = async <T> (url: string, model: T) => {

        return await axios.post(`${this.BASE_URL}/${url}`, model, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error.response);
            });
    }

    update = async <T extends Base> (url: string, model: T) => {

        return await axios.put(`${this.BASE_URL}/${url}/${model.id}`, model, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error.response);
            });
    }

    delete = async (url: string, id: string) => {

        return await axios.delete(`${this.BASE_URL}/${url}/${id}`, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`
            }
        })
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return Promise.reject(error.response);
            });
    }

    //#endregion

    //#region Additionals

    insertImage = async (image: ImageData) => {

        var formData = new FormData();
        formData.append('file', {
            name: image.fileName,
            type: image.type,
            uri: Platform.OS === 'android' ? image.uri : image.uri.replace('file://', '')
        });

        return await axios.post(`${this.BASE_URL}/${IMAGE_URL}/upload`, formData, {
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return Promise.reject(error.response);
            });
    }

    //#endregion

    //#region External

    cepSearch = async (cep: string) => {

        return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                return res.data;
            })
            .catch((error) => {
                return Promise.reject(error);
            });
    }

    //#endregion

}

export {
    ADDRESS_URL,
    ADDRESS_STORE_URL,
    CATEGORY_URL,
    CATEGORY_PRODUCT_URL,
    COUPON_URL,
    DELIVERY_STATUS_URL,
    DELIVERY_TAX_URL,
    ITEM_URL,
    IMAGE_URL,
    ORDER_URL,
    ORDER_PRODUCT_URL,
    ORDER_PRODUCT_ITEM_URL,
    PAYMENT_STATUS_URL,
    PAYMENT_TYPE_URL,
    PRODUCT_URL,
    PRODUCT_ITEM_URL,
    STORE_URL,
    USER_COUPON_URL,
    STORE_DAYHOUR_URL,
};

export default Api;
