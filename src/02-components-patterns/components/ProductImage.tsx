import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

// export const ProductImage = ({ img = '' }) => {
//     return (
//         <img className={styles.productImg} src={img ? img : noImage} alt="Product" />
//     )
// }

// Custom ClassName
export interface Props {
    img?: string;
    className?: string;
    style?: CSSProperties;
}

//export const ProductImage = ({ img = '' }) => {
export const ProductImage = ({ img, className, style }: Props) => {
    // Context para componentes hijos 
    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img 
            className={`${styles.productImg} ${className}`} 
            src={imgToShow} 
            style={style}
            alt="Product" 
        />
    )
}