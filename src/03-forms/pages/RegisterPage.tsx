
import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';



export const RegisterPage = () => {

    const { 
        formData, onChange, 
        name, email, password1, password2,
        resetForm, isValidEmail
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    //const { } = formData;

    /*const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2 } = registerData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        setRegisterData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))

    }*/

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <h1>Register page</h1>
            <form noValidate onSubmit={ (e) => onSubmit(e) }>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(event) => onChange(event)}
                    name="name"
                    className={ `${ name.trim().length <= 0 && 'has-error'}` }
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }
                
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={onChange}
                    name="email"
                />
                { !isValidEmail(email) && <span>El email no es valido</span> }

                <input
                    type="password"
                    placeholder="contraseña"
                    value={password1}
                    onChange={onChange}
                    name="password1"
                />

                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 carácteres</span> }

                <input
                    type="password"
                    placeholder="Repetir contraseña"
                    value={password2}
                    onChange={onChange}
                    name="password2"
                />
                 { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                 { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas no son iguales</span> }

                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm } >Reset</button>
            </form>
        </div>
    )
}
