import { useState } from "react";
import UserStore from "../zustand/UserStore/UserStore";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const userStore = UserStore()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        userStore.setEmail(email as string)
        userStore.setPassword(password as string)
        return navigate('/list')
    }

    return (
        <form onSubmit={(event) => submitHandler(event)}>
            <Input 
                type="email"
                placeHolder="E-Mail"
                name="Email: "
                onChange={ (event) => setEmail(event.target.value) }
                value={ email }
            />
            <Input 
                type="password"
                placeHolder="Senha"
                name="Senha: "
                onChange={ (event) => setPassword(event.target.value) }
                value={ password }
            />
            <Button 
                type="submit"
                disabled={false}
                name="Entrar"
                onClick={() => {}}
            />
        </form>
    )
}