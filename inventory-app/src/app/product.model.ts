/**
 * Created by valdemar on 10.04.18.
 */
export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number
    ) {}
}
