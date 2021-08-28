import { Base } from "./base/Base";
import { User } from "./User";
import { Coupon } from "./Coupon";

export class UserCoupon extends Base {

    userId: string = '';

    user: User | null = null;

    couponId: string = '';

    coupon: Coupon | null = null;

    isUsed: boolean = false;
}
