import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

// export const ProductImage = ({ img = '' }) => {
//     return (
//         <img className={styles.productImg} src={img ? img : noImage} alt="Product" />
//     )
// }

export const ProductImage = ({ img = '' }) => {
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
        <img className={styles.productImg} src={imgToShow} alt="Product" />
    )
}