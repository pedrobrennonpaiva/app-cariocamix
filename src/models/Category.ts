import { Base } from "./base/Base";
import { Product } from "./Product";

export class Category extends Base {

    title: string = '';
}

export class CategoryList extends Category {

    data: Product[] = new Array<Product>();
}
