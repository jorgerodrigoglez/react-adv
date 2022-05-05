import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

// interface ProductButtonsProps {
//     increaseBy: (value: number) => void;
//     counter: number;
// }

//export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {
    export const ProductButtons = () => {
        // Context para componentes hijos 
        const { increaseBy, counter } = useContext(ProductContext);
    
        return (
            <div className={styles.buttonsContainer}>
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >-</button>
                <div className={styles.countLabel}>
                    {counter}
                </div>
                <button
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}
                >+</button>
            </div>
        );
    }