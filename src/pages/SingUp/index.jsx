import { Background } from "../../Components/Background";
import { Container, Form } from "./styles";
import { Input } from './../../Components/Input';
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Button } from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SingUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUP() {
        if (!name || !email || !password) {
            return alert("preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
        .then(()=>{
            alert("Usuário cadastrado com sucesso");
            navigate('/')
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("não foi possivel cadasrar")
            }
        })

    }

    return (
        <Container>

            <Form>
                <h1>RocketMovies</h1>
                <h2> Aplicação para acompanhar tudo que assistir. </h2>

                <span>Crie sua conta</span>

                <Input icon={FiUser} type="text" placeholder="Nome" onChange={e => setName(e.target.value)}/>

                <Input icon={FiMail} type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />

                <Input icon={FiLock} type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>

                <Button onClick={handleSignUP} title="Cadastrar" />
                <Link to="/"><FiArrowLeft /> Voltar para o login</Link>
            </Form>

            <Background />
        </Container>
    )
}