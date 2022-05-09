import { createContext, ReactElement, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Custom ClassName
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    // control-props
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
    //console.log(styles);
    const { counter, increaseBy } = useProduct({ onChange, product, value });

    return (
        <div className={styles.productCard}>
            {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffee Mug" /> */}
            {/* <img className={ styles.productImg } src={ product.img ? product.img : noImage} alt="Coffee Mug"/> */}

            {/* <span className={styles.productDescripcion}>{product.title}</span> */}

            {/* <div className={styles.buttonsContainer}>
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
            </div> */}


            {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons
                increaseBy={increaseBy}
                counter={counter}
            /> */}

            <Provider value={{
                counter,
                increaseBy,
                product,
            }}>
                <div 
                    className={`${styles.productCard} ${className}`}
                    style={style}
                >
                    {children}
                </div>

            </Provider>

        </div>
    )
}

// en components/index.ts
//ProductCard.Title = ProductTitle;
//ProductCard.Image = ProductImage;
//ProductCard.Buttons = ProductButtons;
