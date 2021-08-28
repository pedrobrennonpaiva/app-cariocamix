import { Base } from "./base/Base";

export class Coupon extends Base {

    code: string = '';

    isActive: boolean = false;

    percentage: number | undefined;

    price: number | undefined;
}
