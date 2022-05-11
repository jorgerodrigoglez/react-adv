import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

// Custom ClassName
export interface Props {
    className?: string;
    style?: CSSProperties;
}

//export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {
//export const ProductButtons = () => {
export const ProductButtons = ({ className, style}: Props) => {
    // Context para componentes hijos 
    const { increaseBy, counter, maxCount } = useContext(ProductContext);
    //console.log(counter);
    //console.log(maxCount);

    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button
                // si es un true aplica el estilo
                className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled }`}
                onClick={() => increaseBy(+1)}
            >+</button>
        </div>
    );
}