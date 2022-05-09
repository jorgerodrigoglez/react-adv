import { useState, useEffect, useRef} from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

// control-props
interface useProductArg{
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number
}


//export const useProduct = ( onChange?: () => void ) => {
export const useProduct = ( { onChange, product, value = 0 }: useProductArg ) => {

    const [counter, setCounter] = useState(value);
    // refaroctización del onChange mediante useRef
    const isController = useRef( !!onChange ); // true

    const increaseBy = (value: number) => {
        //console.log(value);
        //setCounter(prev => Math.max(prev + value, 0))
        //onChange && onChange();

        //console.log('isCantrolled', isController.current );
        if( isController.current && onChange){
            return onChange({count: value, product});
        }

        // control-props
        const newValue = Math.max(counter + value, 0);
        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    // Cambia el valor del counter sincronizado 
    useEffect(() => {
        setCounter(value);
    }, [value])

    return {
        counter,
        increaseBy
    }
}
