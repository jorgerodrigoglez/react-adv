import { useField, ErrorMessage } from 'formik';

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {

    const [ field ] = useField(props);
    //console.log(field);

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props }/>
            <ErrorMessage name={props.name} component="span" className="custom-span-error-class"/>
            {/* {
                // errores
                meta.touched && meta.error && (
                    <span className="error">{ meta.error }</span>
                )
            } */}
        </>
    )
}
