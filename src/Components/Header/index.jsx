import { Container, Exit, Logo, Profile } from "./style";
import { Input } from "./../Input/";
import  teste  from "../../assets/teste.png"
import { Link } from "react-router-dom";


export function Header() {

    return (
        <Container>

            <Logo to="/">RocketMovies</Logo>

            <Input type="text" placeholder="Pesquisar pelo titulo" />


            <Profile to="/profile">
                <div>
                    <span>João Paulo Cassatti</span>
                    <Exit to="/CreateMovie">sair</Exit>
                </div>
                <img src={teste} alt="imagem de perfil" />
            </Profile>

        </Container>
    )
}