import { useContext, CSSProperties} from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

// export const ProductTitle = ({ title }: { title: string }) => {
//     return (
//         <span className={styles.productDescripcion}>{title}</span>
//     )
// }

// Custom ClassName
export interface Props {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

//export const ProductTitle = ({ title }: { title?: string }) => {
export const ProductTitle = ({ title, className, style }: Props ) => {
    // Context para componentes hijos 
    const { product } = useContext(ProductContext);
    return (
        <span 
            className={`${styles.productDescripcion} ${className}`}
            style={style}
        >
            {title ? title : product.title}
        </span>
    )
}