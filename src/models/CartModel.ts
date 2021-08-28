import { Address } from "./Address";
import { Coupon } from "./Coupon";
import { PaymentType } from "./PaymentType";
import { Product } from "./Product";
import { ProductItem } from "./ProductItem";

export class CartModel {

    cartProducts: CartProductModel[] | null = null;

    paymentType: PaymentType | null = null;

    address: Address | null = null;

    coupon: Coupon | null = null;

    total: number = 0;
}

export class CartProductModel {

    product: Product = new Product();

    productItems: ProductItem[] = new Array<ProductItem>();

    quantity: number = 0;

    obs: string = '';

    total: number = 0;
}
