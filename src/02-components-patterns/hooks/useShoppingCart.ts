import { useState } from "react";
import { products } from "../data/products";
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    // control-props
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({
        //'1': {...product, count: 10 },
        //'2': {...product2, count: 2 },
    });
    //console.log(shoppingCart);

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        //console.log(count, product);
        // no se puede hacer...
        //shoppingCart[ product.id ] = { ...product, count }
        //console.log({ count });

        setShoppingCart(oldShoppingCart => {
            // refaroctización del onChange mediante useRef en useProduct
            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }
            //console.log(oldShoppingCart);
            //console.log( productInCart );

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            };
            // si el producto es = a 0 o menor a 0 hay que borrarlo
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest }

            // eliminar el producto con cantidad 0
            {/*if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                //console.log({ toDelete })
                return { ...rest }
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }*/}
            //console.log( shoppingCart );

        });
    }

    return{
        products,
        shoppingCart,
        onProductCountChange
    }
}
