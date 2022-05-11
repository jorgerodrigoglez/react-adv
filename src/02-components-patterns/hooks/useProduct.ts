import { useState, useEffect, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

// control-props
interface useProductArg{
    product: Product;
    onChange?: (args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}


//export const useProduct = ( onChange?: () => void ) => {
export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArg ) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    // refaroctización del onChange mediante useRef
    // const isController = useRef( !!onChange ); // true
    const isMounted = useRef(false);
    //console.log(initialValues?.count);
    //console.log(counter);

    const increaseBy = (value: number) => {
        //console.log(value);
        //setCounter(prev => Math.max(prev + value, 0))
        //onChange && onChange();

        //console.log('isCantrolled', isController.current );
        // if( isController.current && onChange){
        //     return onChange({count: value, product});
        // }

        let newValue = Math.max(counter + value, 0);
        if( initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues?.maxCount);
        }
        // control-props
        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    // resetea el valor del counter
    const reset = () => {
        setCounter( initialValues?.count || value );
    }

    // Cambia el valor del counter sincronizado 
    useEffect(() => {
        // si es true no hay que hacer nada 
        // solo hay que ejecutar el setCounter si el componente ha sido montado si el valor de useRef es false
        if(!isMounted.current) return;
        // si el valor es true el setCounter no se ejecuta
        setCounter(counter);
    }, [counter])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }
}
