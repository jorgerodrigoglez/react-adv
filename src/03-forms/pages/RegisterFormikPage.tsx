
import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register formik page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'el nombre debe tener 2 caractes o más')
                            .max(15, 'el nombre debe tener menos de 15 caractes')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Revise el formato del email')
                            .required('Requerido'),
                        password1: Yup.string()
                            .min(6, 'Minimo 6 letras')
                            .required('Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                            .required('Requerido')
                    })
                }
            >

                { ({handleReset}) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            placeholder="Jorge"
                        />
                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="jrg@gmail.com"
                        />
                        <MyTextInput
                            label="Password"
                            name="password1"
                            type="password"
                            placeholder="******"
                        />
                          <MyTextInput
                            label="Confirm Password"
                            name="password2"
                            type="password"
                            placeholder="******"
                        />
                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </Form>
                )}



            </Formik>

        </div >
    )
}
