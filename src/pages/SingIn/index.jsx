import { Container, Form } from "./styles";
import { Background } from './../../Components/Background';
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth()

    function handleSingIn(){
        signIn({ email, password})
    }


    return (
        <Container>
            <Form>

                <h1>RocketMovies</h1>
                <h2> Aplicação para acompanhar tudo que assistir. </h2>

                <span>Faça seu login</span>

                <Input
                    icon={FiMail}
                    type="text"
                    placeholder="E-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />


                <Button onClick={handleSingIn} title="Entrar" />

                <Link to="/register">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    )
}