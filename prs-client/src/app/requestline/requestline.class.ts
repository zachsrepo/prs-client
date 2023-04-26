import { Product } from "../product/product.class";

export class Requestline {
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    product!: Product;
    request!: Request;
    quantity: number = 1;
}