import { Base } from "./base/Base";
import { Store } from "./Store";

export class StoreDayHour extends Base {

    storeId: string = '';

    store: Store | null = null;

    dayOfWeek: number = 0;

    hourOpen: string = '';

    hourClose: string = '';

    isDayBefore: boolean = false;
}
