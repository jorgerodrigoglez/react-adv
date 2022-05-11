//import { ReactElement } from 'react';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductButtonsProps} from '../components/ProductBottons';


/*export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
}*/

export interface Product {
    id: string;
    title: string;
    img?: string;
}

// Context para componentes hijos 
export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;

}

// Interface de ProductCard {opcional} - componets/index.ts
export interface ProductCardHOCProps {
    //({ children, product }: ProductCardProps): JSX.Element,
    ({ children, product }: ProductCardProps): JSX.Element;
    //Title: ({ title }: {title?: string}) => JSX.Element,
    //Image:({ img }: {img?: string}) => JSX.Element,
    //Buttons:() => JSX.Element,

    // Custom ClassName
    //Title: (Props: { title?: string, className?: string }) => JSX.Element,
    Title:  (Props: ProductTitleProps)     => JSX.Element;
    //Image:( Props: {img?: string, className?: string }) => JSX.Element,
    Image:  ( Props: ProductImageProps)    => JSX.Element;
    //Buttons:({ className }: {className?: string}) => JSX.Element,
    //Buttons:( Props: {className?: string}) => JSX.Element,
    Buttons: ( Props: ProductButtonsProps) => JSX.Element;
}

// control-props
export interface onChangeArgs {
    product: Product;
    count: number;
}

// useShoppingCart
export interface ProductInCart extends Product {
    count: number
}

// components-extend-initializer
export interface InitialValues{
    count?: number;
    maxCount?: number
}

// components-extend-initializer
export interface ProductCardHandlers{
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number ) => void;
    reset: () => void

}
