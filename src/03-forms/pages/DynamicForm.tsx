import formJson from '../components/data/custom-form.json';
import { Form, Formik } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

console.log(formJson);

const initialValues: { [key: string]: any } = {}
// validations
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }

        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres`);
        }

        if (rule.type === 'email') {
            schema = schema.email('Revise el formato de email');
        }
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {

    return (
        <div>
            <h1>Dynamic Forms</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form>
                        {formJson.map(({ type, name, placeholder, label, options }) => {
                            if (type === 'email' || type === 'password' || type === 'input') {
                                return <MyTextInput
                                    key={name}
                                    type={(type as any)}
                                    name={name}
                                    label={label}
                                    placeholder={placeholder}
                                />
                            } else if (type === 'select') {
                                return <MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="">Select</option>
                                    {
                                        options?.map(({ id, label }) => (
                                            <option key={id} value={label}>{label}</option>
                                        ))
                                    }
                                </MySelect>
                            }

                            //return <span>Type : {type} no es soportado</span>
                            throw new Error(`El type: ${type}, no es soprtado`);

                        })}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
