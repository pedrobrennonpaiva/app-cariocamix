import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react';
import Api from '../services/api';
import { User, UserAuthenticate } from '../models/User';
import { AuthenticateModel } from '../models/Authenticate';
import { Session } from '../services/session';
import { CartModel, CartProductModel } from '../models/CartModel';

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: (model: AuthenticateModel) => Promise<void>;
    signOut: () => Promise<void>;
    updateUser: (model: User) => Promise<void>;
    cart: CartModel;
    insertCartProduct: (cartProduct: CartProductModel) => Promise<void>;
    removeCartProduct: (cartProduct: CartProductModel) => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<User>({} as User);
    const [cart, setCart] = useState<CartModel>({} as CartModel);
    const [loading, setLoading] = useState(false);
    const api = new Api();

    async function signIn(model: AuthenticateModel) {
        try
        {
            setLoading(true);

            await api.authenticateUser(model).then(response => {

                const data = response.data as UserAuthenticate;
                Session.login(data);
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                throw `${err.response.data.message ? err.response.data.message : 'Não foi possível logar!'}`;
            });
        }
        catch (err)
        {
            setLoading(false);
            throw `Ocorreu um erro ao logar! ${err}`;
        }
    }

    async function signOut() {
        setUser({} as User);
        Session.logout();
    }

    async function updateUser(newUser: User) {

        try {
            setLoading(true);

            await api.updateUser(newUser).then(async res => {
                var nuser = res.data.user as UserAuthenticate;
                var userAuth = await Session.getUser();
                nuser.token = userAuth?.token!;
                nuser.tokenExpires = userAuth?.tokenExpires!;
                Session.login(nuser);
                setUser(nuser);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                throw `${err.response.data.message ?
                    err.response.data.message :
                    'Não foi possível atualizar o usuário!'}`;
            });
        }
        catch (err)
        {
            console.log(err);
            setLoading(false);
            throw `Ocorreu um erro ao atualizar! ${err}`;
        }
    }

    async function insertCartProduct(cartProduct: CartProductModel) {

        var nCart = new CartModel();
        nCart.cartProducts = cart.cartProducts ?? new Array<CartProductModel>();
        nCart.address = cart.address;
        nCart.paymentType = cart.paymentType;
        nCart.total = cartProduct.total + (cart.total || 0);

        nCart.cartProducts?.push(cartProduct);
        setCart(nCart);
        Session.setCart(nCart);
    }

    async function removeCartProduct(cartProduct: CartProductModel) {

        var nCart = new CartModel();
        nCart.cartProducts = cart.cartProducts?.filter(x => x !== cartProduct)!;
        nCart.address = cart.address;
        nCart.paymentType = cart.paymentType;
        nCart.total = cart.total - cartProduct.total;

        setCart(nCart);
        Session.setCart(nCart);
    }

    async function loadCart() {
        const storage = await Session.getCart();

        if(storage)
        {
            setCart(storage);
        }
    }

    async function loadUserStorageData() {
        const storage = await Session.getUser();

        if(storage)
        {
            setUser(storage);
        }
    }

    useEffect(() => {
        loadUserStorageData();
        loadCart();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn,
            signOut,
            updateUser,
            cart,
            insertCartProduct,
            removeCartProduct
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}
