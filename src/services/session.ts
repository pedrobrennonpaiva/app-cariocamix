import AsyncStorage from "@react-native-async-storage/async-storage";
import { CartModel } from "../models/CartModel";
import { User, UserAuthenticate } from "../models/User";

export class Session {

    static TOKEN_KEY = "Token";
    static USER = "USR";
    static CART = "CRT";

    static isAuthenticated = async () => {

        if(AsyncStorage.getItem(Session.TOKEN_KEY) !== null)
        {
            var gItem = await AsyncStorage.getItem(Session.USER);
            var item = gItem ? JSON.parse(gItem) as UserAuthenticate : null;

            var data = new Date();
            var date = new Date(data.valueOf() - (data.getTimezoneOffset() * 60000)).toISOString();

            if(item === null || item.tokenExpires < date)
            {
                return false;
            }

            return true;
        }
        else {
            return false;
        }
    }

    static getToken = async () => await AsyncStorage.getItem(Session.TOKEN_KEY);

    static login = (user: UserAuthenticate) => {
        AsyncStorage.setItem(Session.TOKEN_KEY, user.token);
        AsyncStorage.setItem(Session.USER, JSON.stringify(user));
    }

    static logout = () => {
        AsyncStorage.removeItem(Session.TOKEN_KEY);
        AsyncStorage.removeItem(Session.USER);
    }

    static getUser = async () : Promise<UserAuthenticate | null> => {
        var gItem = await AsyncStorage.getItem(Session.USER);

        try {
            return gItem ? JSON.parse(gItem) as UserAuthenticate : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }

    static setCart = (cart: CartModel) => {
        AsyncStorage.setItem(Session.CART, JSON.stringify(cart));
    }

    static getCart = async () : Promise<CartModel | null> => {
        var gItem = await AsyncStorage.getItem(Session.CART);

        try {
            return gItem ? JSON.parse(gItem) as CartModel : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }

    static getItem = async <T>(item: string) : Promise<T | null> => {
        const gItem = await AsyncStorage.getItem(item);

        try {
            return gItem ? JSON.parse(gItem) : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }

    static setItem = async <T>(name: string, item: T) => {
        await AsyncStorage.setItem(name, JSON.stringify(item));
    }

    static removeItem = async (item: string) => {
        await AsyncStorage.removeItem(item);
    }
}
