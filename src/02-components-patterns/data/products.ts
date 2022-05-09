import { Product } from "../interfaces/interfaces";

const product = {
    id: '1',
    title: 'Coffee Mugg',
    img: './coffee-mug.png'

}

const product2 = {
    id: '2',
    title: 'Coffee Mugg2',
    img: './coffee-mug2.png'

}

// control-props
export const products: Product[] = [product, product2];