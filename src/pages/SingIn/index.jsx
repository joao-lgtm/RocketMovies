import { Container, Form } from "./styles";
import { Background } from './../../Components/Background';
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { FiMail, FiLock } from 'react-icons/fi'

export function SingIn() {
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
                />
                <Input
                    icon={FiLock}
                    type="text"
                    placeholder="Senha"
                />


                <Button title="Entrar" />

                <a href="">Criar conta</a>
            </Form>
            <Background />
        </Container>
    )
}