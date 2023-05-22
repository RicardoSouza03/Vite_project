import { useState } from "react";
import UserStore from "../zustand/UserStore/UserStore";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

export default function Login() {
    const userStore = UserStore()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const submitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        userStore.setEmail(email as string)
        userStore.setPassword(password as string)
        return navigate('/list')
    }

    const validateForm = () => {
        const errors = {email: '', password: ''}
        if (!email) {
            errors.email = 'Obrigatório'
        }
        if (password.length < 6) {
            errors.password = 'Muito fraca'
        }
        return errors
    }

    return (
        <Form 
            onSubmit={submitHandler}
            validate={validateForm}
            render={({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email" >
                        {({ input, meta }) => (
                            <div>
                                <label>Email: </label>
                                <input
                                    {...input}
                                    onChange={(event) => setEmail(event.target.value)} 
                                    placeholder="Email"
                                    type="text"
                                    value={email}
                                />
                                { meta.touched && meta.error && <span>{meta.error}</span> }
                            </div>
                        )}
                    </Field>
                    <Field name="password">
                        {({ input, meta }) => (
                            <div>
                                <label>Senha: </label>
                                <input
                                    type="text"
                                    {...input}
                                    placeholder="Senha"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                />
                                { meta.touched && meta.error && <span>{meta.error}</span> }
                            </div>
                        )}
                    </Field>
                    <Button 
                        disabled={submitting}
                        name="Entrar"
                        onClick={(event) => submitHandler(event)}
                        type="submit"
                    />
                </form>
            )}
        />
    )
}
