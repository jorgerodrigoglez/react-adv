import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

// export const ProductTitle = ({ title }: { title: string }) => {
//     return (
//         <span className={styles.productDescripcion}>{title}</span>
//     )
// }

export const ProductTitle = ({ title }: { title?: string }) => {
    // Context para componentes hijos 
    const { product } = useContext(ProductContext);
    return (
        <span className={styles.productDescripcion}>
            {title ? title : product.title}
        </span>
    )
}