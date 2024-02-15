import { Background } from "../../Components/Background";
import { Container, Form } from "./styles";
import { Input } from './../../Components/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

export function SingUp() {
    return (
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <h2> Aplicação para acompanhar tudo que assistir. </h2>

                <span>Crie sua conta</span>

                <Input icon={FiUser} type="text" placeholder="Nome" />

                <Input icon={FiMail} type="email" placeholder="E-mail" />

                <Input icon={FiLock} type="password" placeholder="Senha" />

                <Button title="Cadastrar" />
                <Link to="/"><FiArrowLeft /> Voltar para o login</Link>
            </Form>

            <Background />
        </Container>
    )
}