import '../styles/styles.css';
// formik
import { Formik, Field, Form, ErrorMessage } from 'formik';
// yup
import * as Yup from 'yup';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

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

                        <label htmlFor="lastName">First Name</label>
                        <Field name="firstName" type="text" placeholder="Name"/>
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text"/>
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email">Address Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Elige opción</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-Senior</option>
                            <option value="it-jr">it-jr</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and Conditions
                            <ErrorMessage name="terms" component="span"/>
                        </label>


                        <button type="submit">Submit</button>
                    </Form>
                )}

            </Formik>


        </div>
    )
}
