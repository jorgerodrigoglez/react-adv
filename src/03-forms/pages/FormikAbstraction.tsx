import '../styles/styles.css';
// formik
import { Formik, Form } from 'formik';
// yup
import * as Yup from 'yup';
// components
// import { MyTextInput } from '../components/MyTextInput';
// import { MySelect } from '../components/MySelect';
// import { MyCheckbox } from '../components/MyCheckbox';

import { MyCheckbox, MySelect, MyTextInput} from '../components';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe tener 15 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El email no tiene un formato valido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Debe aceptar las condiciones'),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Está opción no es permitida')
                            .required('Requerido'),
                    })
                }
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="First Name"
                            name="firstName"
                            placeholder="Jorge"
                        />

                        <MyTextInput
                            label="Last Name"
                            name="lastName"
                            placeholder="Rodrigo"
                        />


                        <MyTextInput
                            label="Email"
                            name="email"
                            placeholder="jrg@gmail.com"
                            type="email"
                        />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Elige opción</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-Senior</option>
                            <option value="it-jr">it-jr</option>
                        </MySelect>

                        <MyCheckbox label="terms and conditions" name="terms"/>

                        <button type="submit">Submit</button>
                    </Form>
                )}

            </Formik>


        </div>
    )
}
